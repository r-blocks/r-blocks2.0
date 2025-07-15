import Blockly from 'blockly';

/**
 * Library block definition
 */
Blockly.Blocks['lib'] = {
  init: function () {
    this.appendDummyInput('library')
      .appendField('library(')
      .appendField(
        new Blockly.FieldDropdown([
          ['mosaic', 'mosaic'],
          ['mosaicData', 'mosaicData'],
          ['Stat2Data', 'Stat2Data'],
        ]),
        'library_name'
      )
      .appendField(')');
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(20);
    this.setTooltip('This is used to load the library');
    this.setHelpUrl('https://www.rdocumentation.org/packages/base/versions/3.6.2/topics/library');
  },
};

/**
 * Library block code generator
 */
Blockly.JavaScript['lib'] = function (block) {
  var dropdown_library_name = block.getFieldValue('library_name');
  var code = 'library(' + dropdown_library_name + ')\n';
  return code;
};

/**
 * General library block definition
 */
Blockly.Blocks['Glib'] = {
  init: function () {
    this.appendDummyInput('')
      .appendField('library(')
      .appendField(new Blockly.FieldTextInput(''), 'library_name')
      .appendField(')');
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(20);
    this.setTooltip('This is used to load the library');
    this.setHelpUrl('https://www.rdocumentation.org/packages/base/versions/3.6.2/topics/library');
  },
};

/**
 * General library block code generator
 */
Blockly.JavaScript['Glib'] = function (block) {
  var dropdown_library_name = block.getFieldValue('library_name');
  var code = 'library(' + dropdown_library_name + ')\n';
  return code;
};

export default {};
