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
                sh 'npm install -g serve'
                sh 'serve -s build'
            }
        }
    }
}