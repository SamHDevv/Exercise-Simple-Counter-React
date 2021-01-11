/* global FontAwesomeConfig */

import fontawesome from "@fortawesome/fontawesome";
import faClock from "@fortawesome/fontawesome-free-regular/faClock";
fontawesome.config = {
	autoReplaceSvg: "nest"
};
fontawesome.library.add(faClock);

/**
 * 1) First install fontawesome library: npm install fontawesome
 * 2) Second import every icon you will use
 * 3) Tell font-awesome you want to replace your icons with svgs (recommended for perfomance)
 * 4)add the icons into the fontawesome library
 * 5) Now, you can place the icon tag anywhere you want to icon to show, for example:
 *    <i class="fas fa-check"></i>
 */
