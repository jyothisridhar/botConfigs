	{
		"triggerWord": "cabs",
		"type": "questionnaire",
		"fields": [
		{
			"name": "Proceed",
			"prompt": "Good Day <@$Command.Profile.UserId>!!\nMy name is __. This is a customer satisfaction survey on behalf of X cabs and will take few minutes of your valuable time.\n\nCan I proceed with the survey?",
			"options": "Yes,No"
		},{
			"name": "Connect",
			"prompt": "Can I connect with you for the survey at a later time?",
			"options": "Yes,No",
			"validations": [{
				"validation": "showif",
				"when": [{
					"col": "$Proceed",
					"value": "No"
				}]
			}]
		}, {
			"name": "Recall",
			"prompt": "You had recently taken X cab for a ride distance of more than 15kms. Do you recall any such ride?",
			"options": "Yes,No",
			"validations": [{
				"validation": "showif",
				"when": [{
					"col": "$Proceed",
					"value": "Yes"
				}
				]
			}]
		}, {
			"name": "WhenRideTaken",
			"prompt": "Do you remember when you took the ride?",
			"options": "Last Week,7-15 days back,15-30 days back,1 month ago or earlier",
			"validations": [{
				"validation": "showif",
				"when": [{
					"col": "$Recall",
					"value": "Yes"
				}]
			}]
		},{
			"name": "RateRide",
			"prompt": "How would you rate your ride overall? On a scale of A to E with A being Very Good to E being Very Bad:",
			"options": "A,B,C,D,E",
			"validations": [{
				"validation": "showif",
				"when": [{
					"col": "$Recall",
					"value": "Yes"
				}]
			}]
		}, {
			"name": "RideIssue",
			"prompt": "Did you have any issue with the ride?",
			"options": "Yes,No",
			"validations": [{
				"validation": "showif",
				"when": [{
					"col": "$Recall",
					"value": "Yes"
				}]
			}]
		}, {
			"name": "IssueType",
			"prompt": "Sorry to hear about it and sorry for the inconvenience caused.\nPlease let me know the type of issue",
			"options": "Unclean Car,Driver was unprofessional,Lost an item,Issue with the receipt or payment option,Accident during the ride",
			"validations": [{
				"validation": "showif",
				"when": [{
					"col": "$RideIssue",
					"value": "Yes"
				}]
			}]
		}, {
			"name": "BookingExperienceWithIssue",
			"prompt": "Your response is recorded and we will look into this.\n\nHow would you rate your booking experience? On a scale of A to E with A being Very Good to E being Very Bad",
			"options": "A,B,C,D,E",
			"validations": [{
				"validation": "showif",
				"when": [{
					"col": "$RideIssue",
					"value": "Yes"
				}]
			}]
		},{
			"name": "BookingExperienceWithoutIssue",
			"prompt": "How would you rate your booking experience? On a scale of A to E with A being Very Good to E being Very Bad",
			"options": "A,B,C,D,E",
			"validations": [{
				"validation": "showif",
				"when": [{
					"col": "$RideIssue",
					"value": "No"
				},{
					"col": "$Recall",
					"value": "Yes"
				}]
			}]
		}, {
			"name": "AgeGroup",
			"prompt": "Please select the age group to which you belong:",
			"options": "18-25,25-35,35-50,above 50",
			"validations": [{
				"validation": "showif",
				"when": [{
					"col": "$Recall",
					"value": "Yes"
				},{
					"col": "$Proceed",
					"value": "Yes"
				}]
			}]
		}, {
			"name": "Gender",
			"prompt": "If you do not mind, please let me know your gender:",
			"options": "Male,Female",
			"validations": [{
				"validation": "showif",
				"when": [{
					"col": "$Recall",
					"value": "Yes"
				},{
					"col": "$Proceed",
					"value": "Yes"
				}]
			}]
		}],
		"events": [{
		    "name": "afterrun",
		    "actionGroups": [{
		        "actions": "__sendMessage displayTemplates:custom_ThankYou"
		    }]
		}],
		"displayTemplates": {
			"custom_ThankYou": {
				"type": "plainmessage",
				"phMessage": "Thank you for your response. Have a great day."
			}
			,"load": {
			"type": "message"
			,"phMessage": "Good Day <@$Command.Profile.UserId>!!\nMy name is __. This is a customer satisfaction survey on behalf of X cabs and will take few minutes of your valuable time."
			,"phOptions": "Continue:add,Cancel:quit"
		},

			"quit": {
				"type": "plainmessage",
				"phMessage": "I'll be here. Just say \"bot\" at any time to submit a request"
			}
		}
	}