/**
 * Blockly R Blocks Configuration
 *
 * This file serves as the main configuration for R-specific Blockly blocks,
 * importing and organizing block definitions across multiple categories:
 * - General utility blocks
 * - Statistical inference blocks
 * - Descriptive statistics blocks
 * - Data visualization blocks
 *
 * Dependencies:
 * - Blockly
 * - blockly/javascript
 * - ./blockly_compressed
 *
 * Key Features:
 * - Imports block definitions by category
 * - Configures R code generator
 * - Exports Blockly configuration for R
 */

import Blockly from 'blockly';
import 'blockly/javascript';
import { BlocklyR } from './blockly_compressed';

// Import block definitions directly
import './blocks/general/glimpse';
import './blocks/general/head';
import './blocks/general/help';
import './blocks/general/lib';
import './blocks/general/names';
import './blocks/general/tail';
import './blocks/general/ggplot2_lib';
import './blocks/general/ggplot2_head';
import './blocks/general/ggplot2_tail';
import './blocks/general/ggplot2_names';
import './blocks/general/ggplot2_help';
import './blocks/general/ggplot2_glimpse';
import './blocks/inference/anova';
import './blocks/inference/proptest';
import './blocks/inference/proptest2';
import './blocks/inference/xchisqtest';
import './blocks/inference/ttest';
import './blocks/inference/Gproptest';
import './blocks/inference/Gproptest2';
import './blocks/inference/slrsummary';
import './blocks/inference/Gslrsummary';
import './blocks/inference/Gxchisqtest';
import './blocks/inference/bootstrap_ci_prop';
import './blocks/inference/bootstrap_test_prop';
import './blocks/inference/bootstrap_ci_mean';
import './blocks/inference/bootstrap_test_mean';
import './blocks/inference/bootstrap_ci_paired';
import './blocks/inference/bootstrap_test_paired';
import './blocks/inference/bootstrap_ci_diffprop';
import './blocks/inference/bootstrap_ci_diffmean';
import './blocks/inference/bootstrap_ci_cor';
import './blocks/inference/bootstrap_ci_lm';
import './blocks/statistics/correlation';
import './blocks/statistics/tally';
import './blocks/statistics/tallysexdata';
import './blocks/statistics/tallysexdata2';
import './blocks/statistics/tallysexformatdata';
import './blocks/statistics/Gtallydata';
import './blocks/statistics/Gtallydataformat';
import './blocks/statistics/Gtallysexdata';
import './blocks/statistics/Gtallysexdata2';
import './blocks/statistics/Gtallysexformatdata';
import './blocks/statistics/favstats';
import './blocks/visualization/gf_boxplot';
import './blocks/visualization/gf_histogram';
import './blocks/visualization/gf_bar';
import './blocks/visualization/gf_point';
import './blocks/visualization/gf_dens';
import './blocks/visualization/gf_counts';
import './blocks/visualization/gf_dens_color';
import './blocks/visualization/gf_percents';
import './blocks/visualization/Ggf_bar';
import './blocks/visualization/Ggf_dens';
import './blocks/visualization/Ggf_dens_color';
import './blocks/visualization/Ggf_histogram';
import './blocks/visualization/Ggf_histogram_substance';
import './blocks/visualization/Ggf_point';
import './blocks/visualization/mosaicplot';
import './blocks/visualization/pie';
import './blocks/visualization/Gggplot_init';
import './blocks/visualization/ggplot_init';
import './blocks/visualization/Glabs';
import './blocks/visualization/Gtheme_minimal';
import './blocks/visualization/labs.js';
import './blocks/visualization/theme_minimal.js';
import './blocks/visualization/geom_line';
import './blocks/visualization/Ggeom_line';
import './blocks/visualization/geom_point';
import './blocks/visualization/Ggeom_point';
import './blocks/visualization/geom_bar';
import './blocks/visualization/Ggeom_bar';
import './blocks/visualization/geom_col';
import './blocks/visualization/Ggeom_col';
import './blocks/visualization/geom_histogram';
import './blocks/visualization/Ggeom_histogram';
import './blocks/visualization/geom_density';
import './blocks/visualization/Ggeom_density';
import './blocks/visualization/geom_boxplot';
import './blocks/visualization/Ggeom_boxplot';
import './blocks/visualization/geom_violin';
import './blocks/visualization/Ggeom_violin';
import './blocks/visualization/geom_area';
import './blocks/visualization/Ggeom_area';
import './blocks/visualization/geom_text';
import './blocks/visualization/Ggeom_text';
import './blocks/visualization/geom_label';
import './blocks/visualization/Ggeom_label';
import './blocks/visualization/geom_sf';
import './blocks/visualization/Ggeom_sf';

// Setup R blocks generator
Blockly.RBlocks = new Blockly.Generator('RBlocks');

// Configure the JavaScript generator to use R-style comments
Blockly.JavaScript.scrub_ = function (block, code, opt_thisOnly) {
  if (code === '') {
    return ''; // If no code, don't add comments either
  }

  let commentCode = '';
  // Only collect comments for blocks that aren't inline.
  if (!block.outputConnection || !block.outputConnection.targetConnection) {
    // Collect comment for this block.
    let comment = block.getCommentText();
    if (comment) {
      // Use R-style comments with # instead of //
      commentCode += this.prefixLines(comment, '# ') + '\n';
    }
    // Collect comments for all value arguments.
    // Don't collect comments for nested statements.
    for (let i = 0; i < block.inputList.length; i++) {
      if (block.inputList[i].type === Blockly.INPUT_VALUE) {
        const childBlock = block.inputList[i].connection.targetBlock();
        if (childBlock) {
          comment = this.allNestedComments(childBlock);
          if (comment) {
            // Use R-style comments with # instead of //
            commentCode += this.prefixLines(comment, '# ') + '\n';
          }
        }
      }
    }
  }

  const nextBlock = block.nextConnection && block.nextConnection.targetBlock();
  const nextCode = opt_thisOnly ? '' : this.blockToCode(nextBlock);

  // Ensure we keep the actual code along with the comments
  return commentCode + code + nextCode;
};

export { Blockly, BlocklyR };
