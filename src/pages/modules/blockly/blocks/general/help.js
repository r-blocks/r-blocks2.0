import Blockly from 'blockly';

/**
 * Help block definition with dropdown menu
 */
Blockly.Blocks['help'] = {
  init: function () {
    this.appendDummyInput('help')
      .appendField('help(')
      .appendField(
        new Blockly.FieldDropdown([
          ['HELPrct', 'HELPrct'],
          ['mosaicData', 'mosaicData'],
          ['Stat2Data', 'Stat2Data'],
        ]),
        'data'
      )
      .appendField(')');
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(20);
    this.setTooltip('This is used to access help from R');
    this.setHelpUrl('https://www.rdocumentation.org/packages/base/versions/3.6.2/topics/library');
  },
};

/**
 * Generator for help block
 */
Blockly.JavaScript['help'] = function (block) {
  var dropdown_data_name = block.getFieldValue('data');
  var code = 'help(' + dropdown_data_name + ')\n';
  return code;
};

/**
 * Generic help block definition with text input
 */
Blockly.Blocks['Ghelp'] = {
  init: function () {
    this.appendDummyInput('help')
      .appendField('help(')
      .appendField(new Blockly.FieldTextInput(''), 'data')
      .appendField(')');
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(20);
    this.setTooltip('This is used to access help from R');
    this.setHelpUrl('https://www.rdocumentation.org/packages/base/versions/3.6.2/topics/library');
  },
};

/**
 * Generator for generic help block
 */
Blockly.JavaScript['Ghelp'] = function (block) {
  var dropdown_data_name = block.getFieldValue('data');
  var code = 'help(' + dropdown_data_name + ')\n';
  return code;
};

export default {};
