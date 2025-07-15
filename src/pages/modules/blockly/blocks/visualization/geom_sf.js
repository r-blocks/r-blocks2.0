import Blockly from 'blockly';

/**
 * Geom_sf block definition for spatial data
 */
Blockly.Blocks['geom_sf'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('geom_sf(fill =')
      .appendField(
        new Blockly.FieldDropdown([
          ['blue', '"blue"'],
          ['red', '"red"'],
          ['green', '"green"'],
          ['steelblue', '"steelblue"'],
          ['orange', '"orange"'],
        ]),
        'fill'
      )
      .appendField(', color =')
      .appendField(
        new Blockly.FieldDropdown([
          ['black', '"black"'],
          ['white', '"white"'],
          ['gray', '"gray"'],
          ['darkgray', '"darkgray"'],
          ['transparent', '"transparent"'],
        ]),
        'color'
      )
      .appendField(')');

    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip('Creates a spatial data plot using ggplot2');
    this.setHelpUrl('https://ggplot2.tidyverse.org/reference/ggsf.html');
  },
};

/**
 * Generator for geom_sf block
 */
Blockly.JavaScript['geom_sf'] = function (block) {
  var fill = block.getFieldValue('fill');
  var color = block.getFieldValue('color');

  var code = 'geom_sf(fill = ' + fill + ', color = ' + color + ')\n';

  return code;
};

/**
 * Generic geom_sf block definition with text inputs
 */
Blockly.Blocks['Ggeom_sf'] = {
  init: function () {
    this.appendDummyInput()
      .appendField('geom_sf(fill =')
      .appendField(new Blockly.FieldTextInput('steelblue'), 'fill')
      .appendField(', color =')
      .appendField(new Blockly.FieldTextInput('black'), 'color')
      .appendField(')');

    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip('Creates a spatial data plot using ggplot2 with custom inputs');
    this.setHelpUrl('https://ggplot2.tidyverse.org/reference/ggsf.html');
  },
};

/**
 * Generator for generic geom_sf block
 */
Blockly.JavaScript['Ggeom_sf'] = function (block) {
  var fill = block.getFieldValue('fill');
  var color = block.getFieldValue('color');

  // Add quotes to string values if they don't have them
  fill = fill.startsWith('"') ? fill : '"' + fill + '"';
  color = color.startsWith('"') ? color : '"' + color + '"';

  var code = 'geom_sf(fill = ' + fill + ', color = ' + color + ')\n';

  return code;
};

export default {};
