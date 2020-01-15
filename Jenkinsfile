pipeline {
    agent any
      stages {
        stage ('clone git repo') {
            steps {
                    sh ' 
                    	git clone https://github.com/chaitanya4419/pravallika.git
					' 
					}
				}
		stage('IBM Cloud Deploy') {
		    steps {
			       sh '
				    which ibmcloud
                    ibmcloud login -a https://cloud.ibm.com --apikey tNRRYqdjFs4WdD516EUeWQ1o1ox2vKjeFhJTWwT7PxPA -r eu-gb -o chaicho1@in.ibm.com -s dev -g Default-cc
                    #ibmcloud plugin install cloud-functions
					ibmcloud fn list
					#cd cloud-fn
					pwd
					ibmcloud fn action create hello3 hello3.js --kind nodejs:10
                 ' 
		    }
                              
                }
            }
        }
