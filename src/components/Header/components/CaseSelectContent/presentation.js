import React from 'react';

import './style.scss';
import classnames from 'classnames';
import CaseList from '../CaseList';
import {Button} from '@gisatcz/ptr-atoms';
import Models from '../Models';
import Inputs from '../Inputs';
import About from '../About';
import Methodologies from '../Methodologies';
import Logo from '../Logo';

class CaseSelectContent extends React.PureComponent {
	render() {
		const props = this.props;

		let classes = classnames('tacrGeoinvaze-case-select-content', {
			showIntro: props.introVisible && !props.content,
		});

		return (
			<div className={classes}>
				<div className="tacrGeoinvaze-case-select-content-content-wrapper">
					<div className="tacrGeoinvaze-case-select-content-header">
						<Logo />
						<h1>Geoinformační portál biologických invazí</h1>
					</div>
					<div className="tacrGeoinvaze-case-select-content-info">
						<div className="tacrGeoinvaze-case-select-content-intro">
							<div>
								<p>
									Tento geoinformační portál je zaměřen na
									vizualizaci distribuce invazních nepůvodních
									druhů v rámci ČR. Pro druhy byly vytvořeny
									mapy současného výskytu a predikční modely
									možného výskytu. V mapách současného
									rozšíření je možné též sledovat vývoj šíření
									druhu podle délky trvání výskytu v zájmovém
									území. Zobrazení výstupů modelů pak ukazuje
									maximální možné rozšíření druhů a predikci v
									časových horizontech.
								</p>
								<p>
									Portál by měl sloužit orgánům státní správy
									a územní samosprávy, stejně tak soukromým
									vlastníkům pozemků, honiteb a správcům
									lesních pozemků. Na základě aktuálního
									rozšíření či potenciálního nebezpečí
									rozšíření invazních druhů je možno navrhnout
									cílené postupy monitoringu a likvidace
									invazních druhů v zájmovém území, popřípadě
									žádat o státní finanční příspěvky na
									likvidaci a management invazních nepůvodních
									druhů.
								</p>
							</div>
							<div className="tacrGeoinvaze-case-select-content-logos">
								<a
									className="tacrGeoinvaze-consortium-logo"
									href="https://www.tacr.cz/"
									target="blank"
								>
									<svg
										className="tacrGeoinvaze-logo-tacr"
										width="245.66667px"
										height="245.66667px"
										viewBox="0 0 245.66667 245.66667"
									>
										<path d="M 0 -0.001953125 L 0 245.66602 L 245.66992 245.66602 L 245.66992 -0.001953125 L 0 -0.001953125 z M 56.746094 56.691406 L 86.521484 56.691406 L 86.521484 63.335938 L 75.386719 63.335938 L 75.386719 89.775391 L 68.080078 89.775391 L 68.080078 63.335938 L 56.746094 63.335938 L 56.746094 56.691406 z M 168.85547 56.691406 L 175.35938 56.691406 L 189.02734 89.775391 L 181.24609 89.775391 L 179.01172 84.21875 L 165.19922 84.21875 L 162.9707 89.775391 L 155.18359 89.775391 L 168.85547 56.691406 z M 172.12891 66.375 L 167.29102 78.382812 L 176.92578 78.382812 L 172.12891 66.375 z M 64.357422 145.04102 L 71.341797 145.04102 L 74.355469 148.13672 L 77.306641 145.04102 L 84.394531 145.04102 L 84.394531 145.0625 L 77.646484 151.99805 L 71.048828 151.99805 L 64.357422 145.0625 L 64.357422 145.04102 z M 74.544922 154.84375 C 77.169322 154.84375 79.639933 155.39118 81.947266 156.48438 C 84.017533 157.45677 85.811761 158.78702 87.371094 160.43555 L 82.357422 164.64258 C 80.213555 162.54938 77.614655 161.49219 74.544922 161.49219 C 71.601722 161.49219 69.115263 162.48626 67.091797 164.47852 C 65.070997 166.47586 64.052734 168.95929 64.052734 171.92969 C 64.052734 174.90462 65.062399 177.38475 67.072266 179.36328 C 69.082666 181.34048 71.570389 182.32617 74.544922 182.32617 C 77.651722 182.32617 80.257141 181.27146 82.369141 179.17773 L 87.378906 183.38867 C 85.826239 185.03921 84.035009 186.37181 81.974609 187.33594 C 79.649009 188.42914 77.169322 188.97266 74.544922 188.97266 C 69.573589 188.97266 65.370502 187.35217 61.917969 184.10938 C 58.469436 180.86403 56.746094 176.80729 56.746094 171.92969 C 56.746094 167.06035 58.469436 162.99425 61.917969 159.73438 C 65.370502 156.47291 69.573589 154.84375 74.544922 154.84375 z M 161.73242 155.89062 L 175.5918 155.89062 C 178.6958 155.89063 181.34759 156.93995 183.54492 159.04102 C 185.74625 161.14248 186.8457 163.73802 186.8457 166.80469 C 186.8457 168.92709 186.30514 170.8301 185.23047 172.52344 C 184.15181 174.21557 182.73089 175.44001 180.96289 176.20508 L 189.02734 188.97266 L 180.77148 188.97266 L 173.88672 177.95898 L 173.79102 177.95898 L 168.99414 177.95898 L 168.99414 188.97266 L 161.73242 188.97266 L 161.73242 155.89062 z M 168.99414 162.53516 L 168.99414 171.50586 L 174.78516 171.50586 C 176.21183 171.50586 177.36114 171.08622 178.23047 170.24609 C 179.09447 169.41009 179.53125 168.2923 179.53125 166.9043 C 179.53125 165.63617 179.13832 164.58998 178.34766 163.76758 C 177.55566 162.94718 176.57825 162.53516 175.40625 162.53516 L 168.99414 162.53516 z " />
									</svg>
								</a>
								<a
									className="tacrGeoinvaze-consortium-logo"
									href="https://www.czu.cz/cs/"
									target="blank"
								>
									<div className="tacrGeoinvaze-logo-czu"></div>
								</a>
								<a
									className="tacrGeoinvaze-consortium-logo"
									href="http://gisat.cz/content/cz"
									target="blank"
								>
									<svg
										className="tacrGeoinvaze-logo-gisat"
										width="100"
										height="26.2836"
										viewBox="0 0 100 26.2836"
									>
										<path d="m 85.736442,5.228003 h -7.132307 v 3.7326622 h 4.340231 V 10.455381 H 78.604135 L 76.74328,12.245812 V 19.8641 l 1.860855,1.792537 H 87.59571 V 7.0199158 Z m -2.792076,12.692649 h -1.551329 v -3.731604 h 1.551329 v 3.731604 M 41.079893,5.228003 39.220361,7.0199158 V 18.369808 l 1.859532,1.790855 h 4.341924 v 1.495974 h -6.201456 v 3.731414 h 8.992897 l 1.860749,-1.790886 V 5.228003 Z M 45.421817,16.428 H 43.870699 V 8.9606652 h 1.551118 V 16.428 m -28.063512,9.8556 c -1.70678,0 -3.413137,0 -5.118277,0 3.495413,-3.364766 8.32427,-6.891777 8.32427,-12.286775 0,-2.583927 -0.582595,-5.0951018 -2.16456,-7.1941589 C 16.728302,4.5864657 14.486229,2.762701 12.495479,0.84406802 12.410558,0.76163378 12.326007,0.68041649 12.240028,0.59835263 c 1.045825,0 2.091597,0 3.136205,0 0.410637,0 1.735299,-0.23767302 2.049639,0.0655029 1.299212,1.25206917 2.597154,2.50270967 3.896525,3.75372057 3.122342,3.0076325 6.246324,6.0154769 9.368455,9.0245379 -4.444888,4.279331 -8.888506,8.561541 -13.332547,12.841486 m 74.88769,-6.4195 V 8.9606652 H 89.14704 V 5.228003 h 3.098955 V 1.4930656 h 4.652931 V 5.228003 h 3.101072 v 3.7326622 h -3.101072 v 8.9599868 h 3.101072 v 3.735985 h -5.89209 L 92.245995,19.8641 M 63.563856,7.0199158 v 4.6302852 l 1.859268,1.791913 4.340231,2.985886 v 1.492652 h -6.199499 v 3.735985 h 8.993162 L 74.416815,19.8641 V 15.23281 L 72.557018,13.442114 68.214141,10.455381 V 8.9606652 h 6.202674 V 5.228003 H 65.423124 L 63.563856,7.0199158 M 54.491329,3.7349275 h 4.652798 V 7.42238e-7 h -4.652798 z m 6.202144,17.9217095 h -7.751358 v -3.735985 h 1.549214 V 8.9606652 H 52.942115 V 5.228003 h 6.202145 v 12.692649 h 1.549213 v 3.735985 M 17.047457,13.442114 C 17.043489,10.198025 15.009564,7.268118 12.062091,5.9693291 9.0687442,4.651757 5.4507915,5.1298015 2.9346479,7.2325623 0.47122048,9.2917249 -0.60165893,12.670788 0.3366712,15.757733 c 0.9499058,3.123188 3.7696539,5.366082 6.9692609,5.815195 3.2219719,0.449949 6.5733099,-0.968507 8.3881329,-3.689471 0.873866,-1.311382 1.351911,-2.866045 1.353392,-4.441343" />
									</svg>
								</a>
							</div>
						</div>
						<div className="tacrGeoinvaze-case-select-content-links">
							<div className="tacrGeoinvaze-case-select-content-link-home">
								<Button
									invisible
									primary
									onClick={props.changeContent.bind(
										null,
										null
									)}
								>
									Úvod
								</Button>
							</div>
							<Button
								invisible
								primary
								onClick={props.changeContent.bind(
									null,
									'about'
								)}
							>
								O projektu
							</Button>
							<Button
								invisible
								primary
								onClick={props.changeContent.bind(
									null,
									'inputs'
								)}
							>
								Vstupní data
							</Button>
							<Button
								invisible
								primary
								onClick={props.changeContent.bind(
									null,
									'models'
								)}
							>
								Použité modely
							</Button>
							<Button
								invisible
								primary
								onClick={props.changeContent.bind(
									null,
									'methodologies'
								)}
							>
								Metodiky
							</Button>
						</div>
						<div className="tacrGeoinvaze-case-select-content-content">
							{this.renderContent(props.content)}
						</div>
					</div>
				</div>
				<div className="tacrGeoinvaze-case-select-content-cases">
					<div className="tacrGeoinvaze-case-select-terrestrialAnimals">
						<div>Suchozemští živočichové</div>
						{props.categories &&
						props.categories.terrestrialAnimals ? (
							<CaseList
								categoryKey={
									props.categories.terrestrialAnimals
								}
							/>
						) : null}
					</div>
					<div className="tacrGeoinvaze-case-select-terrestrialPlants">
						<div>Suchozemské rostliny</div>
						{props.categories &&
						props.categories.terrestrialPlants ? (
							<CaseList
								categoryKey={props.categories.terrestrialPlants}
							/>
						) : null}
					</div>
					<div className="tacrGeoinvaze-case-select-aquaticAnimals">
						<div>Vodní živočichové</div>
						{props.categories && props.categories.aquaticAnimals ? (
							<CaseList
								categoryKey={props.categories.aquaticAnimals}
							/>
						) : null}
					</div>
					<div className="tacrGeoinvaze-case-select-aquaticPlants">
						<div>Vodní rostliny</div>
						{props.categories && props.categories.aquaticPlants ? (
							<CaseList
								categoryKey={props.categories.aquaticPlants}
							/>
						) : null}
					</div>
				</div>
				<div className="tacrGeoinvaze-case-select-footer">
					<div>
						<div>
							<b>Kontakt</b>
							<br />
							Česká zemědělská univerzita v Praze
							<br />
							Fakulta životního prostředí
							<br />
							Kamýcká 129
							<br />
							165&nbsp;00 Praha - Suchdol
						</div>
						<div>
							<b>Řešitel projektu</b>
							<br />
							doc. Ing. Kateřina Berchová-Bímová, Ph.D.
							<br />
							berchova@fzp.czu.cz
						</div>
						<div>
							<b>Partner projektu</b>
							<br />
							Ing. Miroslav Kopecký
							<br />
							Gisat s.r.o.
							<br />
							Milady Horákové 57
							<br />
							170&nbsp;00 Praha&nbsp;7
						</div>
					</div>
					<div>
						&copy; Česká zemědělská univerzita v Praze, Gisat s.r.o.
					</div>
				</div>
			</div>
		);
	}

	renderContent(key) {
		switch (key) {
			case 'about':
				return React.createElement(About);
			case 'inputs':
				return React.createElement(Inputs);
			case 'models':
				return React.createElement(Models);
			case 'methodologies':
				return React.createElement(Methodologies);
			default:
				return null;
		}
	}
}

export default CaseSelectContent;
