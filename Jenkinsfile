pipeline {
    agent any
    
    environment {
        // Define Docker registry credentials
        DOCKER_REGISTRY_CREDENTIALS = 'docker-hub-credentials'
        
        // Define Kubernetes cluster credentials
        KUBE_CONFIG_CREDENTIALS = 'kube-config-credentials'
        
        // Define Docker image name and tag
        DOCKER_IMAGE_NAME = 'my-laravel-app'
        DOCKER_IMAGE_TAG = 'latest'
        
        // Define Kubernetes namespace
        KUBE_NAMESPACE = 'default'
    }
    
    stages {
        stage('Build and Test') {
            steps {
                script {
                    // Install PHP and required dependencies
                    sh 'apt-get update && apt-get install -y php php-mbstring php-xml php-zip php-curl php-mysql'
                    
                    // Install Composer
                    sh 'php -r "copy(\'https://getcomposer.org/installer\', \'composer-setup.php\');"'
                    sh 'php composer-setup.php --install-dir=/usr/local/bin --filename=composer'
                    sh 'php -r "unlink(\'composer-setup.php\');"'

                    // Install dependencies using Composer
                    sh 'composer install'
                    
                    // Run PHPUnit tests
                    sh 'php artisan test'
                    
                    // Run Laravel Dusk tests
                    sh 'php artisan dusk'
                    
                    // Run static code analysis with PHPStan or Psalm
                    sh 'vendor/bin/phpstan analyze' // or 'vendor/bin/psalm'
                }
            }
        }
        
        stage('Build Docker Image') {
            steps {
                script {
                    // Build Docker image
                    docker.build("${DOCKER_IMAGE_NAME}:${DOCKER_IMAGE_TAG}")
                }
            }
        }
        
        stage('Push Docker Image to Registry') {
            steps {
                script {
                    // Authenticate with Docker registry
                    withCredentials([usernamePassword(credentialsId: DOCKER_REGISTRY_CREDENTIALS, usernameVariable: 'DOCKER_USERNAME', passwordVariable: 'DOCKER_PASSWORD')]) {
                        docker.withRegistry('https://index.docker.io/v1/', 'docker-hub') {
                            // Push Docker image to registry
                            docker.image("${DOCKER_IMAGE_NAME}:${DOCKER_IMAGE_TAG}").push()
                        }
                    }
                }
            }
        }
        
        stage('Deploy to Kubernetes') {
            steps {
                script {
                    // Authenticate with Kubernetes cluster
                    withCredentials([file(credentialsId: KUBE_CONFIG_CREDENTIALS, variable: 'KUBE_CONFIG')]) {
                        // Configure Kubernetes CLI
                        sh "kubectl --kubeconfig=${KUBE_CONFIG} config set-context $(kubectl --kubeconfig=${KUBE_CONFIG} config current-context) --namespace=${KUBE_NAMESPACE}"
                        
                        // Deploy application to Kubernetes
                        sh "kubectl --kubeconfig=${KUBE_CONFIG} apply -f kubernetes/deployment.yaml"
                    }
                }
            }
        }
    }
}
