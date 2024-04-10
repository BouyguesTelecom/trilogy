import { initModals } from './components/modal'
import { initVariant } from './components/font-variant'
import { initCountdowns } from './components/countdown'
import { initAccordions } from './components/accordion'
import { initTableExpansion } from './components/table-expansion'
import { initTabs } from './components/tabs'
import { initAutocomplete } from './components/autocomplete'
import { initSegmentedControl } from './components/segmented-control'
import { initTextarea } from './components/textarea'
import { initChips } from './components/chips'
import { initProgressRadial } from './components/progress-radial'
import { initRange } from './components/range'
import { intersectionObserver } from './utils/intersectionObserver'
import { initSelects } from './components/select'
import { initInputGauge } from './components/input-gauge'
import { initInputIcon } from './components/input-icon'

const loadVanilla = () => {
  initTabs()
  initModals()
  initVariant()
  initCountdowns()
  initTableExpansion()
  initAccordions()
  initAutocomplete()
  initSegmentedControl()
  initTextarea()
  initChips()
  initSelects()
  initInputGauge()
  initInputIcon()
}

let isInitialized = false

if (!isInitialized) {
  // when DOM is loaded
  document.addEventListener('DOMContentLoaded', function () {
    loadVanilla()

    // Assign variable to true
    isInitialized = true

    // Observer config
    const observerConfig = {
      attributes: true,
      childList: true,
      subtree: true,
    }

    // Checking mutations
    const mutationObserver = new MutationObserver(function (mutations: MutationRecord[]) {
      mutations.forEach(function (mutation: MutationRecord) {
        const mutationTarget = mutation.target as HTMLElement

        if (mutationTarget) {
          const modals = mutationTarget.querySelectorAll('[data-modal-context]')
          const accordions = mutationTarget.querySelectorAll('.accordions')
          const countdowns = mutationTarget.querySelectorAll('.countdown')
          const tabs = mutationTarget.querySelectorAll('[data-tabs-context]')
          const autocomplete = mutationTarget.querySelectorAll('[data-autocomplete-context]')
          const fontVariant = mutationTarget.querySelectorAll('[data-variant="auto"]')
          const segmentedControl = mutationTarget.querySelectorAll('.segmented-control-item')
          const textareas = document.querySelectorAll('.textarea')
          const progressRadials = document.querySelectorAll('.progress-radial')
          const ranges = document.querySelectorAll('.range-container')
          const chips = document.querySelectorAll('.chips-list')
          const selects = mutationTarget.querySelectorAll('[data-select-name]')
          const gauges = document.querySelectorAll<HTMLElement>('[data-has-gauge]')
          const iconsShowPwd = document.querySelectorAll<HTMLElement>('[data-show-pwd]')
          const tableexpansion = mutationTarget.querySelectorAll('[data-expandable-row]')

          const elements = [
            { modal: modals },
            { accordion: accordions },
            { tab: tabs },
            { countdown: countdowns },
            { autocomplete: autocomplete },
            { fontVariant: fontVariant },
            { segmentedControl: segmentedControl },
            { textareas: textareas },
            { ranges: ranges },
            { progressRadials: progressRadials },
            { chips: chips },
            { selects: selects },
            { gauges: gauges },
            { iconsShowPwd: iconsShowPwd },
            { tableexpansion: tableexpansion },
          ]

          elements.forEach((element: any) => {
            const key = Object.keys(element)[0]
            if (element[key].length) {
              element[key].forEach((htmlElement: HTMLElement) => {
                const initialized = htmlElement.getAttribute(`data-${key}-initialized`)
                if (initialized !== 'true') {
                  htmlElement.setAttribute(`data-${key}-initialized`, 'true')
                  switch (key) {
                    case 'modal':
                      return initModals()
                    case 'tab':
                      return initTabs()
                    case 'accordion':
                      return initAccordions()
                    case 'countdown':
                      return initCountdowns()
                    case 'autocomplete':
                      return initAutocomplete()
                    case 'fontVariant':
                      return initVariant()
                    case 'segmentedControl':
                      return initSegmentedControl()
                    case 'textareas':
                      return initTextarea()
                    case 'chips':
                      return initChips()
                    case 'selects':
                      return initSelects()
                    case 'ranges':
                      return initRange(htmlElement)
                    case 'progressRadials':
                      return intersectionObserver(htmlElement, initProgressRadial)
                    case 'gauges':
                      return initInputGauge()
                    case 'iconsShowPwd':
                      return initInputIcon()
                    case 'tableexpansion':
                      return initTableExpansion()
                    default:
                      return loadVanilla()
                  }
                }
              })
            }
          })
        }
      })
    })

    mutationObserver.observe(document.documentElement, observerConfig)
  })
}
