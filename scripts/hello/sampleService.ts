namespace app.hello {
	"use strict";

	export class SampleService {

		constructor(private $q: ng.IQService, public $http: ng.IHttpService) {
		}

		test(): any {
			// return this.$http.get("");
			
			//  this.$http.get('http://localhost:9000/db').success(function (data: any, status: any) {
			//             return data;
			
			var deferred = this.$q.defer();
			this.$http.get('data/sample?hoge=1').then(response => {
				deferred.resolve(response.data);
			}).catch(reason => {
				deferred.reject(reason);
			});
			return deferred.promise;
		}

		get(): ng.IPromise<any> {
			
			// alert("get");
			return this.$http.get('/api/items/')
				.then(response => response.data);
		}

		test2(): void {
			// alert("hello");
		}


	}

	angular.module("app.hello").service("sampleService", SampleService);
}
