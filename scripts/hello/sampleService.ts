namespace app.hello {
    "use strict";

    export class SampleService {

        constructor(private $q: ng.IQService, public $http: ng.IHttpService) {
            
            console.log("SampleService constructor");
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

            var params = {
                param1: "param1",
                param2: "param2"
            };
            var config = {
                params: params
            };
            
            this.$http.get("http://localhost:8080/SpringKenshu/api/json/", config)
                .success(function(data, status, headers, config) {
                    console.log("test2", data);
                })
                .error(function(data, status, headers, config) {
                    console.log("test2", data);
                });
        }


    }
}

