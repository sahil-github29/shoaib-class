var map = JSON.parse(`[
	{
		"_id": "56fce507fe4b3824494ebefa",
		"job_purpose": "test justification",
		"job_details": "VM requested  in bng_ccp_pod1",
		"requestedFor": "vinodkm",
		"owner": "vinodkm",
		"date_updated": "2016-03-31T08:51:19.584Z",
		"date_created": "2016-03-31T08:51:19.584Z",
		"catalogSeq": [
			{
				"towerinput": {
				},
				"_id": "56fce507fe4b3824494ebefb",
				"catalog": {
					"id": "56f9150b2d9fa6081470acf3",
					"name": "UBM"
				}
			}
		],
		"facts": [
			{
				"environment": "bng_ccp_pod1",
				"username": "vinodkmubmdemo2",
				"_id": "56fce507fe4b3824494ebefc",
				"hostname": "vinodkmubmdemo2",
				"terminated": false,
				"ipaddress": "0.0.0.0",
				"status": "Failed"
			}
		],
		"status": "pending-approval",
		"started": "2016-03-31T08:51:19.584Z",
		"__v": 0,
		"sn_request_id": "RITM31912"
	},
	{
		"_id": "573999ba4e9ae6f42a8e48de",
		"job_purpose": "test justification",
		"job_details": "VM requested  in bng_ccp_pod1",
		"requestedFor": "vinodkm",
		"owner": "vinodkm",
		"date_updated": "2016-05-16T09:58:18.442Z",
		"date_created": "2016-05-16T09:58:18.442Z",
		"catalogSeq": [
			{
				"towerinput": {
					"become_enabled": false,
					"survey_enabled": true,
					"ask_variables_on_launch": false,
					"host_config_key": "",
					"start_at_task": "",
					"skip_tags": "",
					"force_handlers": false,
					"job_tags": "",
					"verbosity": 1,
					"limit": "",
					"forks": 0,
					"cloud_credential": 1,
					"credential": 3,
					"playbook": "provision_platform-ng.yml",
					"project": 329,
					"inventory": 2,
					"job_type": "run",
					"description": "Provision UBM from latest production release",
					"name": "Platform UBM - Prod - Provision"
				},
				"_id": "573999ba4e9ae6f42a8e48df",
				"catalog": {
					"id": "56f9150b2d9fa6081470acf3",
					"name": "UBM"
				}
			}
		],
		"facts": [
			{
				"environment": "bng_ccp_pod1",
				"username": "vinodkmubm",
				"_id": "573999ba4e9ae6f42a8e48e0",
				"hostname": "vinodkmubm",
				"terminated": false,
				"ipaddress": "0.0.0.0",
				"status": "pending-approval"
			}
		],
		"status": "pending-approval",
		"started": "2016-05-16T09:58:18.434Z",
		"__v": 0
	},
	{
		"_id": "5739a149df2b624833cdf0d2",
		"job_purpose": "test justification",
		"job_details": "VM requested  in bng_ccp_pod1",
		"requestedFor": "vinodkm",
		"owner": "vinodkm",
		"date_updated": "2016-05-16T10:30:33.186Z",
		"date_created": "2016-05-16T10:30:33.186Z",
		"catalogSeq": [
			{
				"towerinput": {
					"become_enabled": false,
					"survey_enabled": true,
					"ask_variables_on_launch": false,
					"host_config_key": "",
					"start_at_task": "",
					"skip_tags": "",
					"force_handlers": false,
					"job_tags": "",
					"verbosity": 1,
					"limit": "",
					"forks": 0,
					"cloud_credential": 1,
					"credential": 3,
					"playbook": "provision_platform-ng.yml",
					"project": 329,
					"inventory": 2,
					"job_type": "run",
					"description": "Provision UBM from latest production release",
					"name": "Platform UBM - Prod - Provision"
				},
				"_id": "5739a149df2b624833cdf0d3",
				"catalog": {
					"id": "56f9150b2d9fa6081470acf3",
					"name": "UBM"
				}
			}
		],
		"facts": [
			{
				"environment": "bng_ccp_pod1",
				"username": "vinodkmubm",
				"_id": "5739a149df2b624833cdf0d4",
				"hostname": "vinodkmubm",
				"terminated": false,
				"ipaddress": "0.0.0.0",
				"status": "pending-approval"
			}
		],
		"status": "pending-approval",
		"started": "2016-05-16T10:30:33.172Z",
		"__v": 0
	},
	{
		"_id": "56fcd2990159109c316a9f30",
		"job_purpose": "test justification",
		"job_details": "VM requested  in bng_ccp_pod1",
		"requestedFor": "vinodkm",
		"owner": "vinodkm",
		"date_updated": "2016-03-31T07:32:41.323Z",
		"date_created": "2016-03-31T07:32:41.323Z",
		"catalogSeq": [
			{
				"towerinput": {
					"name": "Platform UBM - Prod - Provision",
					"description": "Provision UBM from latest production release",
					"job_type": "run",
					"inventory": 2,
					"project": 329,
					"playbook": "provision_platform-ng.yml",
					"credential": 3,
					"forks": 0,
					"limit": "",
					"verbosity": 1,
					"job_tags": "",
					"force_handlers": false,
					"skip_tags": "",
					"start_at_task": ""
				},
				"_id": "56fcd2990159109c316a9f31",
				"catalog": {
					"id": "56f9150b2d9fa6081470acf3",
					"name": "UBM"
				}
			}
		],
		"facts": [
			{
				"environment": "production",
				"username": "vinodkmubmdemo1",
				"_id": "56fcd2990159109c316a9f32",
				"hostname": "contrail-ubm-vinodkmubmdemo1.bnec.juniper.net",
				"terminated": false,
				"ipaddress": "10.224.32.121",
				"status": "Started",
				"ansiblejobid": 2681,
				"memory": 16655,
				"imageid": "d00f8b94-a28a-4f18-b85e-c255c6888ba7",
				"osdetails": "Ubuntu 12.04.4 LTS (precise)",
				"vcupus": 10
			}
		],
		"status": "pending-approval",
		"started": "2016-03-31T07:32:41.307Z",
		"__v": 0,
		"sn_request_id": "RITM31905"
	},
	{
		"_id": "56fce718a1a74b70395ef373",
		"job_purpose": "test justification",
		"job_details": "VM requested  in bng_ccp_pod1",
		"requestedFor": "vinodkm",
		"owner": "vinodkm",
		"date_updated": "2016-03-31T09:00:08.572Z",
		"date_created": "2016-03-31T09:00:08.572Z",
		"catalogSeq": [
			{
				"towerinput": {
					"become_enabled": false,
					"survey_enabled": true,
					"ask_variables_on_launch": false,
					"host_config_key": "",
					"start_at_task": "",
					"skip_tags": "",
					"force_handlers": false,
					"job_tags": "",
					"verbosity": 1,
					"limit": "",
					"forks": 0,
					"cloud_credential": 1,
					"credential": 3,
					"playbook": "provision_platform-ng.yml",
					"project": 329,
					"inventory": 2,
					"job_type": "run",
					"description": "Provision UBM from latest production release",
					"name": "Platform UBM - Prod - Provision"
				},
				"_id": "56fce718a1a74b70395ef374",
				"catalog": {
					"id": "56f9150b2d9fa6081470acf3",
					"name": "UBM"
				}
			}
		],
		"facts": [
			{
				"environment": "production",
				"username": "vinodkmubmdemo3",
				"_id": "56fce718a1a74b70395ef375",
				"hostname": "contrail-ubm-vinodkmubmdemo3.bnec.juniper.net",
				"terminated": false,
				"ipaddress": "10.224.35.13",
				"status": "Started",
				"ansiblejobid": 2683,
				"memory": 16655,
				"imageid": "1f9876bd-e4c3-4f86-bb5b-d5725409b5d9",
				"osdetails": "Ubuntu 12.04.4 LTS (precise)",
				"vcupus": 10,
				"incidentNumber": "INC726094"
			}
		],
		"status": "pending-approval",
		"started": "2016-03-31T09:00:08.571Z",
		"__v": 0,
		"sn_request_id": "RITM31914"
	},
	{
		"_id": "56fcf65c5d085ebc4bb019b3",
		"job_purpose": "Demo instance ",
		"job_details": "VM requested  in svl_ccp_prod",
		"requestedFor": "self",
		"owner": "vinodkm",
		"date_updated": "2016-03-31T10:05:16.767Z",
		"date_created": "2016-03-31T10:05:16.767Z",
		"catalogSeq": [
			{
				"towerinput": {
					"become_enabled": false,
					"survey_enabled": true,
					"ask_variables_on_launch": false,
					"host_config_key": "",
					"start_at_task": "",
					"skip_tags": "",
					"force_handlers": false,
					"job_tags": "",
					"verbosity": 1,
					"limit": "",
					"forks": 0,
					"cloud_credential": 1,
					"credential": 3,
					"playbook": "provision_platform-ng.yml",
					"project": 329,
					"inventory": 2,
					"job_type": "run",
					"description": "Provision UBM from latest production release",
					"name": "Platform UBM - Prod - Provision"
				},
				"_id": "56fcf65c5d085ebc4bb019b4",
				"catalog": {
					"id": "56f9150b2d9fa6081470acf3",
					"name": "UBM"
				}
			}
		],
		"facts": [
			{
				"environment": "svl_ccp_prod",
				"username": "vinodkmubmdemo4",
				"_id": "56fcf65c5d085ebc4bb019b5",
				"hostname": "vinodkmubmdemo4",
				"terminated": false,
				"ipaddress": "0.0.0.0",
				"status": "Failed"
			}
		],
		"status": "approved",
		"started": "2016-03-31T10:05:16.766Z",
		"__v": 0,
		"sn_request_id": "RITM31915"
	},
	{
		"_id": "56fd347a020100cc00106164",
		"job_purpose": "Demo Instance 5",
		"job_details": "VM requested  in bng_ccp_pod1",
		"requestedFor": "vinodkm",
		"owner": "vinodkm",
		"date_updated": "2016-03-31T14:30:18.356Z",
		"date_created": "2016-03-31T14:30:18.356Z",
		"catalogSeq": [
			{
				"towerinput": {
					"become_enabled": false,
					"survey_enabled": true,
					"ask_variables_on_launch": false,
					"host_config_key": "",
					"start_at_task": "",
					"skip_tags": "",
					"force_handlers": false,
					"job_tags": "",
					"verbosity": 1,
					"limit": "",
					"forks": 0,
					"cloud_credential": 1,
					"credential": 3,
					"playbook": "provision_platform-ng.yml",
					"project": 329,
					"inventory": 2,
					"job_type": "run",
					"description": "Provision UBM from latest production release",
					"name": "Platform UBM - Prod - Provision"
				},
				"_id": "56fd347a020100cc00106165",
				"catalog": {
					"id": "56f9150b2d9fa6081470acf3",
					"name": "UBM"
				}
			}
		],
		"facts": [
			{
				"environment": "bng_ccp_pod1",
				"username": "vinodkmubmdemo5",
				"_id": "56fd347a020100cc00106166",
				"hostname": "vinodkmubmdemo5",
				"terminated": false,
				"ipaddress": "0.0.0.0",
				"status": "canceled",
				"ansiblejobid": 2971
			}
		],
		"status": "pending-approval",
		"started": "2016-03-31T14:30:18.356Z",
		"__v": 0,
		"sn_request_id": "RITM31924"
	},
	{
		"_id": "56fd37abcf7ec2cc154d553d",
		"job_purpose": "Demo Instance 6",
		"job_details": "VM requested  in bng_ccp_pod1",
		"requestedFor": "vinodkm",
		"owner": "vinodkm",
		"date_updated": "2016-03-31T14:43:55.809Z",
		"date_created": "2016-03-31T14:43:55.809Z",
		"catalogSeq": [
			{
				"towerinput": {
					"become_enabled": false,
					"survey_enabled": true,
					"ask_variables_on_launch": false,
					"host_config_key": "",
					"start_at_task": "",
					"skip_tags": "",
					"force_handlers": false,
					"job_tags": "",
					"verbosity": 1,
					"limit": "",
					"forks": 0,
					"cloud_credential": 1,
					"credential": 3,
					"playbook": "provision_platform-ng.yml",
					"project": 329,
					"inventory": 2,
					"job_type": "run",
					"description": "Provision UBM from latest production release",
					"name": "Platform UBM - Prod - Provision"
				},
				"_id": "56fd37abcf7ec2cc154d553e",
				"catalog": {
					"id": "56f9150b2d9fa6081470acf3",
					"name": "UBM"
				}
			}
		],
		"facts": [
			{
				"environment": null,
				"username": "vinodkmubmdemo6",
				"_id": "56fd37abcf7ec2cc154d553f",
				"hostname": "contrail-ubm-vinodkmubmdemo6.bnec.juniper.net",
				"terminated": false,
				"ipaddress": "10.224.35.16",
				"status": "Started",
				"ansiblejobid": 2982,
				"memory": 16655,
				"imageid": "745e40af-6a54-47e1-ade8-3c032f4695f5",
				"osdetails": "Ubuntu 12.04.4 LTS (precise)",
				"vcupus": 10,
				"incidentNumber": "INC726149"
			}
		],
		"status": "pending-approval",
		"started": "2016-03-31T14:43:55.808Z",
		"__v": 0,
		"sn_request_id": "RITM31925"
	},
	{
		"_id": "56fd56b4ec7b758829e90613",
		"job_purpose": "test justification",
		"job_details": "VM requested  in bng_ccp_pod1",
		"requestedFor": "vinodkm",
		"owner": "vinodkm",
		"date_updated": "2016-03-31T16:56:20.307Z",
		"date_created": "2016-03-31T16:56:20.306Z",
		"catalogSeq": [
			{
				"towerinput": {
					"become_enabled": false,
					"survey_enabled": true,
					"ask_variables_on_launch": false,
					"host_config_key": "",
					"start_at_task": "",
					"skip_tags": "",
					"force_handlers": false,
					"job_tags": "",
					"verbosity": 1,
					"limit": "",
					"forks": 0,
					"cloud_credential": 1,
					"credential": 3,
					"playbook": "provision_platform-ng.yml",
					"project": 329,
					"inventory": 2,
					"job_type": "run",
					"description": "Provision UBM from latest production release",
					"name": "Platform UBM - Prod - Provision"
				},
				"_id": "56fd56b4ec7b758829e90614",
				"catalog": {
					"id": "56f9150b2d9fa6081470acf3",
					"name": "UBM"
				}
			}
		],
		"facts": [
			{
				"environment": "bng_ccp_pod1",
				"username": "vinodkmubm",
				"_id": "56fd56b4ec7b758829e90615",
				"hostname": "vinodkmubm",
				"terminated": false,
				"ipaddress": "0.0.0.0",
				"status": "pending-approval"
			}
		],
		"status": "pending-approval",
		"started": "2016-03-31T16:56:20.304Z",
		"__v": 0,
		"sn_request_id": "RITM31926"
	},
	{
		"_id": "57359ff51c199db8119afb01",
		"job_purpose": "test justification",
		"job_details": "VM requested  in bng_ccp_pod1",
		"requestedFor": "vinodkm",
		"owner": "vinodkm",
		"date_updated": "2016-05-13T09:35:49.569Z",
		"date_created": "2016-05-13T09:35:49.569Z",
		"catalogSeq": [
			{
				"towerinput": {
					"become_enabled": false,
					"survey_enabled": true,
					"ask_variables_on_launch": false,
					"host_config_key": "",
					"start_at_task": "",
					"skip_tags": "",
					"force_handlers": false,
					"job_tags": "",
					"verbosity": 1,
					"limit": "",
					"forks": 0,
					"cloud_credential": 1,
					"credential": 3,
					"playbook": "provision_platform-ng.yml",
					"project": 329,
					"inventory": 2,
					"job_type": "run",
					"description": "Provision UBM from latest production release",
					"name": "Platform UBM - Prod - Provision"
				},
				"_id": "57359ff51c199db8119afb02",
				"catalog": {
					"id": "56f9150b2d9fa6081470acf3",
					"name": "UBM"
				}
			}
		],
		"facts": [
			{
				"environment": "bng_ccp_pod1",
				"username": "vinodkmubm",
				"_id": "57359ff51c199db8119afb03",
				"hostname": "vinodkmubm",
				"terminated": false,
				"ipaddress": "0.0.0.0",
				"status": "pending-approval"
			}
		],
		"status": "pending-approval",
		"started": "2016-05-13T09:35:49.567Z",
		"__v": 0,
		"sn_request_id": "RITM32012"
	},
	{
		"_id": "5738150e3a2bfcc8226558d4",
		"job_purpose": "test justification",
		"job_details": "VM requested  in bng_ccp_pod1",
		"requestedFor": "vinodkm",
		"owner": "vinodkm",
		"date_updated": "2016-05-15T06:19:58.478Z",
		"date_created": "2016-05-15T06:19:58.478Z",
		"catalogSeq": [
			{
				"towerinput": {
					"become_enabled": false,
					"survey_enabled": true,
					"ask_variables_on_launch": false,
					"host_config_key": "",
					"start_at_task": "",
					"skip_tags": "",
					"force_handlers": false,
					"job_tags": "",
					"verbosity": 1,
					"limit": "",
					"forks": 0,
					"cloud_credential": 1,
					"credential": 3,
					"playbook": "provision_platform-ng.yml",
					"project": 329,
					"inventory": 2,
					"job_type": "run",
					"description": "Provision UBM from latest production release",
					"name": "Platform UBM - Prod - Provision"
				},
				"_id": "5738150e3a2bfcc8226558d5",
				"catalog": {
					"id": "56f9150b2d9fa6081470acf3",
					"name": "UBM"
				}
			}
		],
		"facts": [
			{
				"environment": "bng_ccp_pod1",
				"username": "vinodkmubm",
				"_id": "5738150e3a2bfcc8226558d6",
				"hostname": "vinodkmubm",
				"terminated": false,
				"ipaddress": "0.0.0.0",
				"status": "pending-approval"
			}
		],
		"status": "pending-approval",
		"started": "2016-05-15T06:19:58.478Z",
		"__v": 0
	},
	{
		"_id": "5738153e08bfdfb42645b2be",
		"job_purpose": "test justification",
		"job_details": "VM requested  in bng_ccp_pod1",
		"requestedFor": "vinodkm",
		"owner": "vinodkm",
		"date_updated": "2016-05-15T06:20:46.953Z",
		"date_created": "2016-05-15T06:20:46.953Z",
		"catalogSeq": [
			{
				"towerinput": {
					"become_enabled": false,
					"survey_enabled": true,
					"ask_variables_on_launch": false,
					"host_config_key": "",
					"start_at_task": "",
					"skip_tags": "",
					"force_handlers": false,
					"job_tags": "",
					"verbosity": 1,
					"limit": "",
					"forks": 0,
					"cloud_credential": 1,
					"credential": 3,
					"playbook": "provision_platform-ng.yml",
					"project": 329,
					"inventory": 2,
					"job_type": "run",
					"description": "Provision UBM from latest production release",
					"name": "Platform UBM - Prod - Provision"
				},
				"_id": "5738153e08bfdfb42645b2bf",
				"catalog": {
					"id": "56f9150b2d9fa6081470acf3",
					"name": "UBM"
				}
			}
		],
		"facts": [
			{
				"environment": "bng_ccp_pod1",
				"username": "vinodkmubm",
				"_id": "5738153e08bfdfb42645b2c0",
				"hostname": "vinodkmubm",
				"terminated": false,
				"ipaddress": "0.0.0.0",
				"status": "pending-approval"
			}
		],
		"status": "pending-approval",
		"started": "2016-05-15T06:20:46.953Z",
		"__v": 0,
		"sn_request_id": "RITM32014"
	},
	{
		"_id": "573815ae25851e3404e7ccd7",
		"job_purpose": "test justification",
		"job_details": "VM requested  in bng_ccp_pod1",
		"requestedFor": "vinodkm",
		"owner": "vinodkm",
		"date_updated": "2016-05-15T06:22:38.371Z",
		"date_created": "2016-05-15T06:22:38.370Z",
		"catalogSeq": [
			{
				"towerinput": {
					"become_enabled": false,
					"survey_enabled": true,
					"ask_variables_on_launch": false,
					"host_config_key": "",
					"start_at_task": "",
					"skip_tags": "",
					"force_handlers": false,
					"job_tags": "",
					"verbosity": 1,
					"limit": "",
					"forks": 0,
					"cloud_credential": 1,
					"credential": 3,
					"playbook": "provision_platform-ng.yml",
					"project": 329,
					"inventory": 2,
					"job_type": "run",
					"description": "Provision UBM from latest production release",
					"name": "Platform UBM - Prod - Provision"
				},
				"_id": "573815ae25851e3404e7ccd8",
				"catalog": {
					"id": "56f9150b2d9fa6081470acf3",
					"name": "UBM"
				}
			}
		],
		"facts": [
			{
				"environment": "bng_ccp_pod1",
				"username": "vinodkmubm",
				"_id": "573815ae25851e3404e7ccd9",
				"hostname": "vinodkmubm",
				"terminated": false,
				"ipaddress": "0.0.0.0",
				"status": "pending-approval"
			}
		],
		"status": "pending-approval",
		"started": "2016-05-15T06:22:38.368Z",
		"__v": 0
	},
	{
		"_id": "573815af25851e3404e7ccda",
		"job_purpose": "test justification",
		"job_details": "VM requested  in bng_ccp_pod1",
		"requestedFor": "vinodkm",
		"owner": "vinodkm",
		"date_updated": "2016-05-15T06:22:39.526Z",
		"date_created": "2016-05-15T06:22:39.526Z",
		"catalogSeq": [
			{
				"towerinput": {
					"become_enabled": false,
					"survey_enabled": true,
					"ask_variables_on_launch": false,
					"host_config_key": "",
					"start_at_task": "",
					"skip_tags": "",
					"force_handlers": false,
					"job_tags": "",
					"verbosity": 1,
					"limit": "",
					"forks": 0,
					"cloud_credential": 1,
					"credential": 3,
					"playbook": "provision_platform-ng.yml",
					"project": 329,
					"inventory": 2,
					"job_type": "run",
					"description": "Provision UBM from latest production release",
					"name": "Platform UBM - Prod - Provision"
				},
				"_id": "573815af25851e3404e7ccdb",
				"catalog": {
					"id": "56f9150b2d9fa6081470acf3",
					"name": "UBM"
				}
			}
		],
		"facts": [
			{
				"environment": "bng_ccp_pod1",
				"username": "vinodkmubm",
				"_id": "573815af25851e3404e7ccdc",
				"hostname": "vinodkmubm",
				"terminated": false,
				"ipaddress": "0.0.0.0",
				"status": "pending-approval"
			}
		],
		"status": "pending-approval",
		"started": "2016-05-15T06:22:39.526Z",
		"__v": 0
	}
]`);

var table = "<table border='1'>";

table += "<tr><td>job_purpose</td><td>job_details</td><td>requestedFor</td><td>owner</td><td>date_updated</td><td>date_created</td></tr>"

for (table1 in map) {
    table += "<tr>";
    //table += "<tr><th>" + map + "</th>>"
    //  table += "<tr><th>" + + "</th></tr>";
    table += "<td>" + map[table1]["job_purpose"] + "</td>";
    table += "<td>" + map[table1]["job_purpose"] + "</td>";
    table += "<td>" + map[table1]["requestedFor"] + "</td>";
    table += "<td>" + map[table1]["owner"] + "</td>";
    table += "<td>" + map[table1]["date_updated"] + "</td>";
    table += "<td>" + map[table1]["date_created"] + "</td></tr>";

}
table += "</table>";

var RefDiv = document.getElementById('mytable')
function myFunction() {
    var output = ""
    var tableOutput = document.getElementById("mySelect").value;
	  if (tableOutput == "table") {
        output = table;
    } else if (tableOutput == "json") {
        output = "This is JSON data";
    } else {
        output = "default data";
    }
    RefDiv.innerHTML = output;
} 
