import Blockly from 'blockly';

/**
 * Help block definition with dropdown menu
 */
Blockly.Blocks['ggplot2_help'] = {
  init: function () {
    this.appendDummyInput('help')
      .appendField('help(')
      .appendField(
        new Blockly.FieldDropdown([
          ['ggplot', 'ggplot'],
          ['aes', 'aes'],
          ['geom_point', 'geom_point'],
          ['geom_line', 'geom_line'],
          ['theme', 'theme'],
        ]),
        'data'
      )
      .appendField(')');
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(20);
    this.setTooltip('This is used to access help for ggplot2 functions');
    this.setHelpUrl('https://www.rdocumentation.org/packages/utils/versions/3.6.2/topics/help');
  },
};

/**
 * Generator for help block
 */
Blockly.JavaScript['ggplot2_help'] = function (block) {
  var dropdown_data_name = block.getFieldValue('data');
  var code = 'help(' + dropdown_data_name + ')\n';
  return code;
};

export default {};
