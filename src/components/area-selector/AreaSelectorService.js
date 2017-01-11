/**
 * @author DuYing
 * @homepage https://github.com/Dale-/
 * @since 12/23/16
 */

import './_area-selector.scss';

import ModalService from '../modal/ModalService';
import bodyTemplate from './area-seletor-body.tpl.html';
import AreaSelectorController from './AreaSelectorCtrl';

const noop = () => {
};

/**
 * modal服务
 */
const AreaSelectorService = {

	areaSelector({scope, locals}) {
		return ModalService.modal(
			{
				scope,
				title: '地区选择',
				style: {'max-width': '680px', 'min-height': '420px'},
				fullscreen: false,
				hasFooter: true,
				__body: bodyTemplate,
				locals,
				controller: AreaSelectorController,
				controllerAs: '$ctrl',
				onClose: noop
			}
		);
	}
};

export default AreaSelectorService;
