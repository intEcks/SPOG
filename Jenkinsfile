pipeline {
    agent { docker { image 'node:16.13.1-alpine'
                     args '-u root:sudo -v $HOME/workspace/SPOG_master:/SPOG_master' } }
    stages {
        stage('build') {
            steps {
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