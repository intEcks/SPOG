pipeline {
    agent { docker { image 'node:16.13.1-alpine' } }
    stages {
        stage('build') {
            steps {
                sh 'npm install'
                sh 'npm run build'
            }
        }
        stage('deploy') {
            agent { docker { image 'nginx:apline' } }
            steps {
                sh 'rm -rf ./*'
            }
        }
    }
}