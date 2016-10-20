var app = angular.module('escogeme', ['ngMaterial']);

app.controller('EscogeTabla',function($scope){
    $scope.culonas = {
        name:'culitos',
        titulo:{esp:'Cual esta mas Rico?',eng:'Which one is more yummy?'},
        options:[
            {
                id:'lamer',
                name:{esp:'Lamer', eng:"Lick"},
                icon:'tongue.svg',
                action:{
                    url:'showImage',
                    tipo:'ramdom',
                    image:['1.gif','2.gif','3.gif','4.gif','5.gif','6.gif','7.gif','8.gif','9.gif']
                }
            },
            {
                id:'coger',
                name:{esp:'Coger', eng:"Fuck"},
                icon:'sex.svg',
                action:{
                    url:'showImage',
                    tipo:'ramdom',
                    image:['1.gif','2.gif','3.gif','4.gif','5.gif']
                }
            },
            {
                id:'masturbar',
                name:{esp:'Masturbar', eng:"Maturbate"},
                icon:'masturbate.svg',
                action:{
                    url:'showImage',
                    tipo:'ramdom',
                    image:['1.gif','2.gif','3.gif','4.gif','5.gif','6.gif','7.gif','8.gif','9.gif','10.gif','11.gif','12.gif','13.gif','14.gif','15.gif']
                }
            },
            {
                id:'twerk',
                name:'Twerk',
                icon:'twerk.svg',
                action:{
                    url:'showImage',
                    tipo:'ramdom',
                    image:['1.gif','2.gif','3.gif','4.gif']
                }
            }
        ]
    };
    function ramdom(low, high) {
        var x = Math.ceil(Math.random() * (high - low) + low);
        return x
    }
});