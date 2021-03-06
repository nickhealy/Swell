const assert = require('assert'); 
const sideBar = require('../pageObjects/Sidebar.js'); 


module.exports = () => {
  describe('CRUD/History functionality', function(){
    
    describe('URL/request method inputs', () => {
      it('can type url into url input', async () => {
        await sideBar.url.addValue('pokeapi.co/api/v2/pokemon?limit=5');
        const input = await sideBar.url.getValue();
    
        return assert.strictEqual(input, 'http://pokeapi.co/api/v2/pokemon?limit=5');
      });
  
      it('can select a request method', async () => {
        await sideBar.requestMethod.click();
        await sideBar.choosePost.click();
        let isSelected = await sideBar.choosePost.isSelected();
        assert.strictEqual(isSelected, true); 
  
        await sideBar.requestMethod.click();
        await sideBar.chooseGet.click();
        isSelected = await sideBar.chooseGet.isSelected();
        assert.strictEqual(isSelected, true);
      });
    })

    // describe('headers inputs', async () => {
    //   let inputs;
    //   let headerChecked; 

    //   it('should open headers input, rendering single input at first', async () => {
    //     await sideBar.activateHeaders.click();
    //     inputs = await sideBar.headerCheckbox[0];
    //     assert.strictEqual(inputs.length, 1); 
    //   }); 

    //   it('can type new headers in request', async () => {
    //     await sideBar.headerKey.addValue('testing');
    //     const headerKey = await sideBar.headerKey.getValue();
    //     assert.strictEqual(headerKey, 'testing'); 
  
    //     await sideBar.headerValue.addValue('true'); 
    //     const headerValue = await sideBar.headerValue.getValue();
    //     assert.strictEqual(headerValue, 'true'); 
  
    //   });

    //   it('new headers initialize as checked', async () => {
    //     headerChecked = await sideBar.headerCheckbox.isSelected();
    //     assert.strictEqual(headerChecked, true);
    //   });

    //   // NOTE : THIS WILL FAIL FOR NOW, THIS IS UI DETAIL THAT NEEDS TO BE IMPLEMENTED IN FUTURE
    //   it('deleting text in input eliminates checkmark', async () => {
    //     await sideBar.headerKey.clearValue();
    //     await sideBar.headerValue.clearVAlue();
    //     headerChecked = await sideBar.headerCheckbox.isSelected();
    //     assert.strictEqual(headerChecked, false);
    //   })
    // })

  });
}