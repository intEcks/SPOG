pipeline {
    agent { docker { image 'node:16.13.1-alpine' } }
    stages {
        stage('build') {
            steps {
                sh 'export HOME=/tmp ;  npm config set cache /tmp'
                sh 'npm install'
                sh 'npm run build'
            }
        }
        stage('deploy') {
            steps {
                sh 'docker exec -u 0 -it mycontainer bash'
                sh 'npm install -g serve'
                sh 'serve -s build'
            }
        }
    }
}