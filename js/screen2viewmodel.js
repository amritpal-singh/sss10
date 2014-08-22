

//Connects the binding data to model properties for Ui automatic updates
function ViewModel(session)
{
    var self = this;
    
    self.session = ko.observable(session);

    //table 1 
    //data calculations
    self.province = ko.observable();
    self.location = ko.observable();
    self.iefasa02 = ko.observable();
    self.sa02 = ko.observable();
    self.iefvsa10 = ko.observable();
    self.fv = ko.observable();
    
    //table 2
    self.siteClass = ko.observable();
    self.hght = ko.observable();
    self.ie = ko.observable();
    self.iefvsa10 = ko.observable();
    self.sa02 = ko.observable();
    self.fa = ko.observable();
    self.fasa02 = ko.observable();

    //table 3 data
    self.struct_data = ko.observableArray();
    self.StructuralSystem = ko.observable();
    self.Rd = ko.observable();
    self.Ro = ko.observable();
    self.lt02 = ko.observable();
    self.gteq02lt035 = ko.observable();
    self.gteq035lt075 = ko.observable();
    self.gt075 = ko.observable();
    self.gt03 = ko.observable();
    self.heightLimit = ko.observable();

    self.outputName = ko.observable();
    self.needsConsideration = ko.observable(false);



    self.save = function()
    {
        // $("#a-save-confirm").unbind()
        //                     .removeAttr("data-bind");

        // var data = window.localStorage.getItem(storageKeys.savedOutput);
        // var items = JSON.parse(data);
        // if (!(items && items instanceof Array))
        // {
        //     items = new Array();
        // }

        // var output = new OutputViewModel(self);
        // if(!self.outputName())
        // {
        //     self.outputName(output.id);
        //     output.name = output.id;
        // }

        // items.push(output);

        // window.localStorage.setItem(storageKeys.savedOutput, ko.toJSON(items));
        // window.localStorage.removeItem(storageKeys.sessionInput);

        myVar = setTimeout(function(){
            $(document).scrollTop($(document).scrollTop() + 5);
             $//('#headingh4').html($('#headingh4').html() + ' - ' + $('.footer:first').css('bottom') +'px');
            $('.footer').css('bottom', 0);
            clearTimeout(myVar);
        }, 500);
        
        myVar1 = setTimeout(function(){
            $("#modal-output").modal("hide"); 
            clearTimeout(myVar1);
        }, 800);
        
       
       
        // $("#div-footer-with-output").removeClass("hidden");
        // $("#div-footer-with-save").addClass("hidden");
        
        
    }
};
