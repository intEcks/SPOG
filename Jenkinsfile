pipeline {
    agent { docker { image 'node:16.13.1-alpine' } }
    stages {
        stage('build') {
            steps {
                sh 'docker build -t react-nginx .'
                sh 'docker run --rm -it -p 8080:80 react-nginx'
            }
        }
    }
}