pipeline {
    agent any

    environment {
        DOCKER_IMAGE = 'ritika140601/rideshare:latest'  // Ensure this matches Docker Hub repo
        DOCKER_HUB_CREDENTIALS = 'docker-hub'  // Replace with your Jenkins credentials ID
        GIT_REPO = 'https://github.com/ritika140601/rideshare'
        GIT_BRANCH = 'main'
        CONTAINER_NAME = 'rideshare'  // Define the container name separately
    }

    stages {
        stage('Checkout Code') {
            steps {
                script {
                    echo "📥 Checking out code from ${GIT_REPO}"
                    git branch: GIT_BRANCH, url: GIT_REPO
                }
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    echo "🏗️ Building Docker image: ${DOCKER_IMAGE}"
                    sh "docker build -t ${DOCKER_IMAGE} ."
                }
            }
        }

        stage('Push Docker Image') {
            steps {
                script {
                    echo "📤 Pushing Docker image: ${DOCKER_IMAGE} to Docker Hub"
                    withDockerRegistry([credentialsId: DOCKER_HUB_CREDENTIALS, url: '']) {
                        sh "docker push ${DOCKER_IMAGE}"
                    }
                }
            }
        }

        stage('Deploy Application') {
            steps {
                script {
                    echo "🛑 Stopping and removing old container (if exists)"
                    sh "docker stop ${CONTAINER_NAME} || true"
                    sh "docker rm ${CONTAINER_NAME} || true"
                    
                    echo "🚀 Running new container"
                    sh """
                        docker run -d \
                        -p 3000:3000 \
                        --name ${CONTAINER_NAME} \
                        ${DOCKER_IMAGE}
                    """
                }
            }
        }
    }

    post {
        success {
            echo "🎉 Deployment Successful!"
        }
        failure {
            echo "❌ Deployment Failed!"
        }
    }
}
