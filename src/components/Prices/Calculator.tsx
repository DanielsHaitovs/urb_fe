'use client'

import { useEffect, useMemo, useRef, useState, useId, JSX } from 'react'
import { useTranslations } from 'next-intl'
import { ChevronDown } from 'lucide-react'
import styles from '@/components/Prices/Calculator.module.scss'

const BASE_PACKAGE = {
  base: 2300,
  includedDepth: 30,
  perMeter: 70,
}

const locationOptions = [
  { id: 'riga', surcharge: 0 },
  { id: 'vidzeme', surcharge: 140 },
  { id: 'zemgale', surcharge: 190 },
  { id: 'kurzeme', surcharge: 230 },
  { id: 'latgale', surcharge: 280 },
] as const

const extraServiceOptions = [
  { id: 'casing', price: 100 },
  { id: 'flush', price: 200 },
  { id: 'filter', price: 300 },
  { id: 'prep', price: 400 },
] as const

type LocationId = (typeof locationOptions)[number]['id']
type ExtraServiceId = (typeof extraServiceOptions)[number]['id']

const MIN_DEPTH = 30
const MAX_DEPTH = 100
const DEPTH_STEP = 5

const currencyFormatter = new Intl.NumberFormat('lv-LV', {
  style: 'currency',
  currency: 'EUR',
  maximumFractionDigits: 0,
})

export default function PricesCalculator(): JSX.Element {
  const t = useTranslations('PricesPage')
  const [depth, setDepth] = useState(30)
  const [location, setLocation] = useState<LocationId>(locationOptions[0].id)
  const [selectedExtras, setSelectedExtras] = useState<ExtraServiceId[]>([])
  const [locationOpen, setLocationOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement | null>(null)
  const locationLabelId = useId()
  const locationHintId = useId()

  const selectedLocation =
    locationOptions.find((option) => option.id === location) ??
    locationOptions[0]
  const selectedExtraDetails = extraServiceOptions.filter((extra) =>
    selectedExtras.includes(extra.id)
  )

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent): void => {
      if (!dropdownRef.current?.contains(event.target as Node)) {
        setLocationOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return (): void =>
      document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const breakdown = useMemo(() => {
    const clampedDepth = Math.max(MIN_DEPTH, Math.min(MAX_DEPTH, depth))
    const variableDepth =
      Math.max(clampedDepth - BASE_PACKAGE.includedDepth, 0) *
      BASE_PACKAGE.perMeter
    const extraServicesCost = selectedExtras.reduce((sum, extraId) => {
      const extra = extraServiceOptions.find((item) => item.id === extraId)
      return extra ? sum + extra.price : sum
    }, 0)
    const base = BASE_PACKAGE.base
    const locationCost = selectedLocation.surcharge
    const total = base + variableDepth + extraServicesCost + locationCost

    return {
      clampedDepth,
      base,
      variableDepth,
      extraServicesCost,
      locationCost,
      total,
    }
  }, [depth, selectedExtras, selectedLocation.surcharge])

  const handleDepthChange = (value: number): void => {
    if (Number.isNaN(value)) {
      return
    }
    const safeValue = Math.max(MIN_DEPTH, Math.min(MAX_DEPTH, value))
    setDepth(safeValue)
  }

  const toggleExtraService = (extraId: ExtraServiceId): void => {
    setSelectedExtras((current) =>
      current.includes(extraId)
        ? current.filter((id) => id !== extraId)
        : [...current, extraId]
    )
  }

  return (
    <section id="calculator" className={styles.main}>
      <div className={styles.content}>
        <p className={styles.kicker}>{t('calculator.kicker')}</p>
        <h1 className={styles.title}>
          <span>{t('calculator.title')}</span>
          <span className={styles.summary}>{t('calculator.summary')}</span>
        </h1>
      </div>
      <div className={styles.layout}>
        <form className={styles.form}>
          <label className={styles.depthField}>
            <span>{t('calculator.depthLabel')}</span>
            <div className={styles.depthInputs}>
              <input
                type="range"
                min={MIN_DEPTH}
                max={MAX_DEPTH}
                step={DEPTH_STEP}
                value={depth}
                onChange={(event) =>
                  handleDepthChange(Number(event.target.value))
                }
                aria-label={t('calculator.depthLabel')}
              />
              <input
                type="number"
                min={MIN_DEPTH}
                max={MAX_DEPTH}
                value={depth}
                onChange={(event) =>
                  handleDepthChange(Number(event.target.value))
                }
              />
            </div>
          </label>
          <div className={styles.addOnsField}>
            <div>
              <span>{t('calculator.addOnsLabel')}</span>
              <p>{t('calculator.addOnsHint')}</p>
            </div>
            <div className={styles.checkboxGrid}>
              {extraServiceOptions.map((option) => (
                <label
                  key={option.id}
                  className={styles.checkboxCard}
                  data-selected={selectedExtras.includes(option.id)}
                >
                  <input
                    type="checkbox"
                    value={option.id}
                    checked={selectedExtras.includes(option.id)}
                    onChange={() => toggleExtraService(option.id)}
                  />
                  <div>
                    <strong>{t(`calculator.addOns.${option.id}.label`)}</strong>
                    <p>{t(`calculator.addOns.${option.id}.helper`)}</p>
                  </div>
                  <span>{currencyFormatter.format(option.price)}</span>
                </label>
              ))}
            </div>
          </div>
          <div className={styles.locationField}>
            <span id={locationLabelId}>{t('calculator.locationLabel')}</span>
            <p id={locationHintId}>{t('calculator.locationHint')}</p>
            <div className={styles.customSelect} ref={dropdownRef}>
              <button
                type="button"
                className={styles.selectTrigger}
                onClick={() => setLocationOpen((open) => !open)}
                aria-haspopup="listbox"
                aria-expanded={locationOpen}
                aria-labelledby={locationLabelId}
                aria-describedby={locationHintId}
              >
                <div>
                  <strong>
                    {t(`calculator.locations.${selectedLocation.id}`)}
                  </strong>
                  <span>
                    {selectedLocation.surcharge === 0
                      ? t('calculator.locationIncluded')
                      : currencyFormatter.format(selectedLocation.surcharge)}
                  </span>
                </div>
                <ChevronDown size={18} />
              </button>
              {locationOpen && (
                <ul role="listbox" className={styles.dropdownList}>
                  {locationOptions.map((option) => (
                    <li key={option.id}>
                      <button
                        type="button"
                        role="option"
                        aria-selected={location === option.id}
                        onClick={() => {
                          setLocation(option.id)
                          setLocationOpen(false)
                        }}
                      >
                        <div>
                          <strong>
                            {t(`calculator.locations.${option.id}`)}
                          </strong>
                          <span>
                            {option.surcharge === 0
                              ? t('calculator.locationIncluded')
                              : currencyFormatter.format(option.surcharge)}
                          </span>
                        </div>
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
          <button type="button" className={styles.cta}>
            {t('calculator.button')}
          </button>
        </form>
        <div className={styles.result}>
          <p className={styles.resultLabel}>{t('calculator.resultLabel')}</p>
          <strong>{currencyFormatter.format(breakdown.total)}</strong>
          <p className={styles.resultSummary}>
            {t('calculator.resultSummary', {
              location: t(`calculator.locations.${selectedLocation.id}`),
              depth: breakdown.clampedDepth,
            })}
          </p>
          <div className={styles.addOnsSummary}>
            {selectedExtraDetails.length > 0 ? (
              selectedExtraDetails.map((extra) => (
                <span key={extra.id}>
                  {t(`calculator.addOns.${extra.id}.label`)}
                </span>
              ))
            ) : (
              <span>{t('calculator.addOnsEmpty')}</span>
            )}
          </div>
          <ul>
            <li>
              {t('calculator.breakdown.base', {
                amount: currencyFormatter.format(BASE_PACKAGE.base),
              })}
            </li>
            <li>
              {t('calculator.breakdown.variable', {
                amount: currencyFormatter.format(breakdown.variableDepth),
              })}
            </li>
            <li>
              {t('calculator.breakdown.addOns', {
                amount: currencyFormatter.format(breakdown.extraServicesCost),
              })}
            </li>
            <li>
              {t('calculator.breakdown.location', {
                amount: currencyFormatter.format(breakdown.locationCost),
              })}
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
