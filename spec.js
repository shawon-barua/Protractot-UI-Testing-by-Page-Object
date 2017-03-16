var ArpHomepage = function() {
  var labelARP = element(by.css(".navbar-brand"));
  var greeting = element(by.binding('yourName'));
  var menuDateTime =  element(by.css('[ui-sref="select-datetime"]'));
  var visitorInfo =  element(by.css('[ui-sref="visitor-info"]')); 

  this.get = function() {
     browser.get('https://snow.dev');
  };

  this.setName = function(name) {
    nameInput.sendKeys(name);
  };
    this.getmenuDateTime = function() {
    return menuDateTime.getText();
  };
    
     this.getvisitorInfo = function() {
    return visitorInfo.getText();
  };
    
    this.getLabel = function() {
    return labelARP.getText();
  };

  this.getTitle1 = function() {
    return browser.getTitle();
  };
};
// spec.js
describe('SNOW website', function() {
 
 var arpHomepage = new ArpHomepage();
    arpHomepage.get();
 

  it('should have a title', function() {
      // var arpHomepage = new ArpHomepage();
    //arpHomepage.get();
    expect(arpHomepage.getTitle1()).toEqual('ARP');
  });

  it('should have a Label Named ARP in Top', function() {
  
      expect(arpHomepage.getLabel()).toEqual('ARP');
  
  });
  it('should have a Menu Named Date Time in Top', function() {
  
      expect(arpHomepage.getmenuDateTime()).toEqual('Date Time');
  
  });
  it('should have a Menu Named Visitor Info in Top', function() {
  
      expect(arpHomepage.getvisitorInfo()).toEqual('Visitor Info');
  
  });
});