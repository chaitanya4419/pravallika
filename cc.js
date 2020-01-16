pipeline {
    agent any
      stages {
        stage ('clone git repository ') {
            steps {
                    sh '''
                    pwd
					git clone https://vidhprak:3hBzS-257jxJcqQdTc9Z@gbsgit.in.dst.ibm.com/Admin-Metlife/cloud-fn.git
					'''
					}
				}
		stage('IBM Cloud Deploy') {
		    steps {
			       sh '''
				    which ibmcloud
                    #ibmcloud login -a "https://cloud.ibm.com" --apikey eo4d1315DZHzteNKoFhRsQ-ZL0FSfgfZLkSSuyUcp0Cq -r eu-gb
					ibmcloud login -a "https://cloud.ibm.com" --apikey tNRRYqdjFs4WdD516EUeWQ1o1ox2vKjeFhJTWwT7PxPA -r eu-gb 
                    #ibmcloud plugin install cloud-functions
                    #ibmcloud target -o vidhprak@in.ibm.com -s dev
					ibmcloud target-o chaicho1@in.ibm.com -s dev -g Default-cc
					ibmcloud fn list
					#cd cloud-fn
					pwd
					#ibmcloud fn action create hello1 hello.js --kind nodejs:10
                 '''
		    }
                              
                }
            }
        }
