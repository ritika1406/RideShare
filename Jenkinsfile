pipeline {
    agent any

    environment {
        DOCKER_IMAGE = 'ritika140601/rideshare:latest'
        DOCKER_HUB_CREDENTIALS = 'docker-hub'  // Docker credentials
        GIT_CREDENTIALS = 'github-credentials'  // Jenkins GitHub credentials
        GIT_REPO = 'https://github.com/ritika140601/RideShare.git'
        GIT_BRANCH = 'main'
    }

    stages {
        stage('Checkout Code') {
            steps {
                script {
                    echo "📥 Checking out code from ${GIT_REPO}"
                    checkout([$class: 'GitSCM', 
                        branches: [[name: GIT_BRANCH]],
                        userRemoteConfigs: [[
                            url: GIT_REPO, 
                            credentialsId: GIT_CREDENTIALS
                        ]]
                    ])
                }
            }
        }
    }
}
