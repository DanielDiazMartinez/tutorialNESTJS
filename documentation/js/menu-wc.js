'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">tutorial-nest-js documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AppModule-2584a5ace071e393295ae4fe565b369bcd71c466a798c8c0414b5126c2b4c2711f2be48347356a42066b2c1fe4efb2e248524da5577aa771f68949385d20a3b9"' : 'data-bs-target="#xs-controllers-links-module-AppModule-2584a5ace071e393295ae4fe565b369bcd71c466a798c8c0414b5126c2b4c2711f2be48347356a42066b2c1fe4efb2e248524da5577aa771f68949385d20a3b9"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-2584a5ace071e393295ae4fe565b369bcd71c466a798c8c0414b5126c2b4c2711f2be48347356a42066b2c1fe4efb2e248524da5577aa771f68949385d20a3b9"' :
                                            'id="xs-controllers-links-module-AppModule-2584a5ace071e393295ae4fe565b369bcd71c466a798c8c0414b5126c2b4c2711f2be48347356a42066b2c1fe4efb2e248524da5577aa771f68949385d20a3b9"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AppModule-2584a5ace071e393295ae4fe565b369bcd71c466a798c8c0414b5126c2b4c2711f2be48347356a42066b2c1fe4efb2e248524da5577aa771f68949385d20a3b9"' : 'data-bs-target="#xs-injectables-links-module-AppModule-2584a5ace071e393295ae4fe565b369bcd71c466a798c8c0414b5126c2b4c2711f2be48347356a42066b2c1fe4efb2e248524da5577aa771f68949385d20a3b9"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-2584a5ace071e393295ae4fe565b369bcd71c466a798c8c0414b5126c2b4c2711f2be48347356a42066b2c1fe4efb2e248524da5577aa771f68949385d20a3b9"' :
                                        'id="xs-injectables-links-module-AppModule-2584a5ace071e393295ae4fe565b369bcd71c466a798c8c0414b5126c2b4c2711f2be48347356a42066b2c1fe4efb2e248524da5577aa771f68949385d20a3b9"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AuthModule-93a76d7d0baf83efaaca0f0a0934820bcbf8067ffbb5f6bed174b47500d07dd37361eb5c054da1a7e40f79f84968107ff57fb6122615fc383263628ee5b904f3"' : 'data-bs-target="#xs-injectables-links-module-AuthModule-93a76d7d0baf83efaaca0f0a0934820bcbf8067ffbb5f6bed174b47500d07dd37361eb5c054da1a7e40f79f84968107ff57fb6122615fc383263628ee5b904f3"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-93a76d7d0baf83efaaca0f0a0934820bcbf8067ffbb5f6bed174b47500d07dd37361eb5c054da1a7e40f79f84968107ff57fb6122615fc383263628ee5b904f3"' :
                                        'id="xs-injectables-links-module-AuthModule-93a76d7d0baf83efaaca0f0a0934820bcbf8067ffbb5f6bed174b47500d07dd37361eb5c054da1a7e40f79f84968107ff57fb6122615fc383263628ee5b904f3"' }>
                                        <li class="link">
                                            <a href="injectables/JwtStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >JwtStrategy</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/BooksModule.html" data-type="entity-link" >BooksModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-BooksModule-c50adc2b4437b6eca15c31823be83ff8203316d4bb2ff8cf74aeb31a73b0d4e41bb4376443cfe561bf7cf4f01fef3520a9801c83c23a3d8af4f9e659b53f7f30"' : 'data-bs-target="#xs-controllers-links-module-BooksModule-c50adc2b4437b6eca15c31823be83ff8203316d4bb2ff8cf74aeb31a73b0d4e41bb4376443cfe561bf7cf4f01fef3520a9801c83c23a3d8af4f9e659b53f7f30"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-BooksModule-c50adc2b4437b6eca15c31823be83ff8203316d4bb2ff8cf74aeb31a73b0d4e41bb4376443cfe561bf7cf4f01fef3520a9801c83c23a3d8af4f9e659b53f7f30"' :
                                            'id="xs-controllers-links-module-BooksModule-c50adc2b4437b6eca15c31823be83ff8203316d4bb2ff8cf74aeb31a73b0d4e41bb4376443cfe561bf7cf4f01fef3520a9801c83c23a3d8af4f9e659b53f7f30"' }>
                                            <li class="link">
                                                <a href="controllers/BooksController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BooksController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-BooksModule-c50adc2b4437b6eca15c31823be83ff8203316d4bb2ff8cf74aeb31a73b0d4e41bb4376443cfe561bf7cf4f01fef3520a9801c83c23a3d8af4f9e659b53f7f30"' : 'data-bs-target="#xs-injectables-links-module-BooksModule-c50adc2b4437b6eca15c31823be83ff8203316d4bb2ff8cf74aeb31a73b0d4e41bb4376443cfe561bf7cf4f01fef3520a9801c83c23a3d8af4f9e659b53f7f30"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-BooksModule-c50adc2b4437b6eca15c31823be83ff8203316d4bb2ff8cf74aeb31a73b0d4e41bb4376443cfe561bf7cf4f01fef3520a9801c83c23a3d8af4f9e659b53f7f30"' :
                                        'id="xs-injectables-links-module-BooksModule-c50adc2b4437b6eca15c31823be83ff8203316d4bb2ff8cf74aeb31a73b0d4e41bb4376443cfe561bf7cf4f01fef3520a9801c83c23a3d8af4f9e659b53f7f30"' }>
                                        <li class="link">
                                            <a href="injectables/BooksService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BooksService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#controllers-links"' :
                                'data-bs-target="#xs-controllers-links"' }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"' }>
                                <li class="link">
                                    <a href="controllers/AppController.html" data-type="entity-link" >AppController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/BooksController.html" data-type="entity-link" >BooksController</a>
                                </li>
                            </ul>
                        </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#entities-links"' :
                                'data-bs-target="#xs-entities-links"' }>
                                <span class="icon ion-ios-apps"></span>
                                <span>Entities</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="entities-links"' : 'id="xs-entities-links"' }>
                                <li class="link">
                                    <a href="entities/Book.html" data-type="entity-link" >Book</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/Book.html" data-type="entity-link" >Book</a>
                            </li>
                            <li class="link">
                                <a href="classes/BookDto.html" data-type="entity-link" >BookDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/ConfigService.html" data-type="entity-link" >ConfigService</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AppService.html" data-type="entity-link" >AppService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/BooksService.html" data-type="entity-link" >BooksService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/JwtStrategy.html" data-type="entity-link" >JwtStrategy</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});