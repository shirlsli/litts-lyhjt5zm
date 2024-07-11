import {html, css, LitElement, TemplateResult} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import '@spectrum-web-components/action-group/sp-action-group.js';
import '@spectrum-web-components/action-button/sp-action-button.js';
import '@spectrum-web-components/picker/sp-picker.js';
import '@spectrum-web-components/menu/sp-menu-item.js';
import '@spectrum-web-components/icons/sp-icons-medium.js';
import '@spectrum-web-components/icon/sp-icon.js';
import '@spectrum-web-components/field-label/sp-field-label.js';
import '@spectrum-web-components/icons-workflow/icons/sp-icon-branch-circle.js';
import '@spectrum-web-components/icons-workflow/icons/sp-icon-box.js';
import '@spectrum-web-components/theme/sp-theme.js';
import '@spectrum-web-components/theme/src/themes.js';

@customElement('my-counter')
export class SimpleGreeting extends LitElement {

  // static styles = css`
  // `;

    __setGithubBranchToggle() {
    this.toggle = 'Github branch';
  }

  __setReleaseToggle() {
    this.toggle = 'Package release';
  }

  constructor() {
    super();
  }

  @property({ type: String }) toggle = 'Github branch';
  @property({ type: Array }) branchTagOptions: string[] = ["hello", "hello1", "hello2"];

  protected render(): TemplateResult {
    return html`
    <div>hi</div>
      <sp-theme scale="medium" color="light">
            <sp-action-group compact selects="single" class="section">
              <sp-action-button
                toggles
                selected
                @click=${this.__setGithubBranchToggle}
              >
                Github branch
              </sp-action-button>
              <sp-action-button toggles @click=${this.__setReleaseToggle}>
                Package release
              </sp-action-button>
            </sp-action-group>
            <sp-picker
              class="picker section"
              label=${this.branchTagOptions[0]}
              value=${this.branchTagOptions[0]}
            >
              ${this.branchTagOptions.map(option =>
                this.toggle === 'Github branch'
                  ? html`
                      <sp-menu-item value=${option}>
                        <sp-icon-branch-circle
                          slot="icon"
                        ></sp-icon-branch-circle>
                        ${option}
                      </sp-menu-item>
                    `
                  : html`
                      <sp-menu-item value=${option}>
                        <sp-icon-box slot="icon"></sp-icon-box>
                        ${option}
                      </sp-menu-item>
                    `,
              )}
            </sp-picker>
          </sp-theme>
    `;
  }

}
