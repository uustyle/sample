
///<reference path='./SampleService.ts' />
///<reference path='../../typings/ng-file-upload/ng-file-upload.d.ts' />

namespace app.hello {
    "use strict";

    export interface TestScope extends ng.IScope {
        name?: string;
        temp?: string;
        fileSelect(files: angular.angularFileUpload.IUploadService): void;
    }

    class Test {

    }


    export class SampleController {

static $inject = ["Upload"];
        constructor(private Upload: angular.angularFileUpload.IUploadService, public $scope: TestScope, private customers, private sampleService: SampleService) {

            console.log("upload", Upload);

            // let test: Test = new Test();

            // test[("test")] = "1";

            // // alert(test["test"]);

            // console.log(customers);

            // console.log("1");
            // sampleService.test2();
            // console.log("2");

            // let ret = sampleService.get();
            // console.log("3");
            // console.log(ret);

            // console.log("3");


            // $scope.name = "サーバと通信中";
            // $scope.temp = "仮";
        }


        fileSelect(files: Array<File>) {

alert("fileSelect");


		this.Upload.setDefaults({
			ngfAccept: "*.csv",
			ngfAllowDir: true,
			ngfEnableFirefoxPaste: true,
			ngfHideOnDropNotAvailable: true,
			ngfMaxDuration: 20,
			ngfMaxFiles: 10,
			ngfMaxSize: "10MB",
			ngfMaxTotalSize: "10MB",
			ngfMinDuration: "10s",
			ngfMinRatio: "8:10,1.6",
			ngfMinSize: "1MB",
			ngfMultiple: false,
			ngfRatio: "8:10,1.6",
			ngfStopPropagation: true,
			ngfValidateForce: true
		});



            this.Upload
                .upload({
                    url: "http://localhost:8080/SpringKenshu/upload",
                    method: "POST",
                    data: {
                        file: files[0],
                        extraData: {
                            test: true
                        }
                    }
                    }).abort().xhr((evt: any) => {
                    	console.log("xhr");
                    }).progress((evt: angular.angularFileUpload.IFileProgressEvent) => {
                    	let percent = parseInt((100.0 * evt.loaded / evt.total).toString(), 10);
                    	console.log("upload progress: " + percent + "% for " + evt.config.data.media[0]);
                    }).error((data: any, status: number, response: any, headers: any) => {
                    	console.error(data, status, response, headers);
                }).success((data: any, status: number, headers: any, config: angular.angularFileUpload.IFileUploadConfigFile) => {
                    // file is uploaded successfully
                    console.log("Success!", data, status, headers, config);
                });

            // this.Upload
            // 	.base64DataUrl(files[0])
            // 	.then((file: string) => {
            // 		console.log(file);
            // 	})

            // this.Upload
            // 	.dataUrl(files[0], true)
            // 	.then((result: string) => {
            // 		console.log(result);
            // 	});

            // this.Upload
            // 	.imageDimensions(files[0])
            // 	.then((imageDimensions) => {
            // 		console.log(imageDimensions.height + " " + imageDimensions.width);
            // 	});

            // this.Upload.isResizeSupported();
            // this.Upload.isResumeSupported();
            // this.Upload.isUploadInProgress();

            // let json = this.Upload.json({ test: true }),
            // 	jsonBlob = this.Upload.jsonBlob({ test: true }),
            // 	fileWithNewName = this.Upload.rename(files[0], "newName.jpg");

            // this.Upload
            // 	.resize(files[0], 1024, 1024, 0.7, 'image/jpeg', 0.9, true)
            // 	.then((resizedFile) => {
            // 		console.log(resizedFile);
            // 	});
        }





        // update() {
        // 	this.sampleService.test();
        // }
    }

}
