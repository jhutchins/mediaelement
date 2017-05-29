'use strict';

import document from 'global/document';
import {config} from '../player';
import MediaElementPlayer from '../player';
import i18n from '../core/i18n';
import {IS_ANDROID, IS_IOS} from '../utils/constants';
import {isString, createEvent} from '../utils/general';
import {addClass, removeClass, offset} from '../utils/dom';

/**
 * Volume button
 *
 * This feature enables the displaying of a Volume button in the control bar, and also contains logic to manipulate its
 * events, such as sliding up/down (or left/right, if vertical), muting/unmuting media, etc.
 */

// Feature configuration
Object.assign(config, {
  /**
	 * @type {?String}
	 */
	lockText: null,
	/**
	 * @type {?String}
	 */
	unlockText: null,
	/**
	 * @type {Boolean}
	 */
	autohideUnlock: true,
	/**
	 * Number of clicks to unlock
	 * @type {Number}
	 */
	unlockClicks: 3
});

Object.assign(MediaElementPlayer.prototype, {
	/**
	 * Feature constructor.
	 *
	 * Always has to be prefixed with `build` and the name that will be used in MepDefaults.features list
	 * @param {MediaElementPlayer} player
	 * @param {$} controls
	 * @param {$} layers
	 * @param {HTMLElement} media
	 */
	buildvolume (player, controls, layers, media) {

		const
			t = this,
			lockText = isString(t.options.lockText) ? t.options.lockText : i18n.t('mejs.lock'),
			unlockText = isString(t.options.unlockText) ? t.options.unlockText : i18n.t('mejs.unlock'),
			lock = document.createElement('div')
		;

		lock.className = `${t.options.classPrefix}button ${t.options.classPrefix}lock-button`;
		lock.innerHTML = `<button type="button" aria-controls="${t.id}" title="${lockText}" aria-label="${lockText}" tabindex="0"></button>`;
    lock.addEventListener('click', () => {

    });

		t.addControlElement(lock, 'lock');
	}
});
