pipeline {
    agent any
      stages {
        stage ('clone git repository ') {
            steps {
                    sh '''
                    pwd
					git clone https://github.com/chaitanya4419/pravallika.git
					'''
					}
				}
		stage('IBM Cloud Deploy') {
		    steps {
			       sh '''
				    which ibmcloud
					ibmcloud login -a "https://cloud.ibm.com" --apikey tNRRYqdjFs4WdD516EUeWQ1o1ox2vKjeFhJTWwT7PxPA -r eu-gb 
					ibmcloud target-o chaicho1@in.ibm.com -s dev -g Default-cc
					ibmcloud fn list
					pwd
					#ibmcloud fn action create hello1 hello.js --kind nodejs:10
                 '''
		    }
                              
                }
            }
        }
