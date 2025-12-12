import React, { useState } from 'react'
import { Dropdown, DropdownItem, DropdownGroup } from '@trilogy-ds/react/components/dropdown'
import { Section } from '@trilogy-ds/react/components/section'
import { Title } from '@trilogy-ds/react/components/title'
import { Text } from '@trilogy-ds/react/components/text'

export const DropdownScreen = (): JSX.Element => {
  const [isOpen1, setIsOpen1] = useState(false)
  const [isOpen2, setIsOpen2] = useState(false)
  const [isOpen3, setIsOpen3] = useState(false)
  const [selectedValue, setSelectedValue] = useState<string>('')

  return (
    <Section>
      <Title level={1}>Dropdown Component</Title>
      <Text>Exemples d'utilisation du composant Dropdown comme wrapper simple.</Text>

      {/* Dropdown simple */}
      <div style={{ marginBottom: '2rem' }}>
        <Title level={3}>Dropdown Simple</Title>
        <Text>Dropdown basique avec des items simples et trigger externe.</Text>
        <div style={{ marginTop: '1rem', maxWidth: '300px', position: 'relative' }}>
          <button
            onClick={() => setIsOpen1(!isOpen1)}
            style={{
              width: '100%',
              padding: '12px 16px',
              border: '1px solid #ccc',
              borderRadius: '4px',
              background: 'white',
              cursor: 'pointer',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}
          >
            <span>{selectedValue || 'Choisir une option'}</span>
            <span style={{ transform: isOpen1 ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }}>
              ▼
            </span>
          </button>

          {isOpen1 && (
            <Dropdown isActive={isOpen1}>
              <DropdownItem
                iconName="check"
                onSelect={() => {
                  setSelectedValue('Option 1')
                  setIsOpen1(false)
                }}
              >
                Option 1
              </DropdownItem>
              <DropdownItem
                iconName="calendar"
                onSelect={() => {
                  setSelectedValue('Option 2')
                  setIsOpen1(false)
                }}
              >
                Option 2
              </DropdownItem>
              <DropdownItem
                iconName="search"
                onSelect={() => {
                  setSelectedValue('Option 3')
                  setIsOpen1(false)
                }}
              >
                Option 3
              </DropdownItem>
              <DropdownItem iconName="times" disabled>
                Option désactivée
              </DropdownItem>
            </Dropdown>
          )}
        </div>
        {selectedValue && (
          <Text style={{ marginTop: '0.5rem' }}>
            Valeur sélectionnée : <strong>{selectedValue}</strong>
          </Text>
        )}
      </div>

      {/* Dropdown avec groupes */}
      <div style={{ marginBottom: '2rem' }}>
        <Title level={3}>Dropdown avec Groupes</Title>
        <Text>Dropdown avec des groupes d'items organisés par catégorie.</Text>
        <div style={{ marginTop: '1rem', maxWidth: '300px', position: 'relative' }}>
          <button
            onClick={() => setIsOpen2(!isOpen2)}
            style={{
              width: '100%',
              padding: '12px 16px',
              border: '1px solid #ccc',
              borderRadius: '4px',
              background: 'white',
              cursor: 'pointer',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}
          >
            <span>Sélectionner une action</span>
            <span style={{ transform: isOpen2 ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }}>
              ▼
            </span>
          </button>

          {isOpen2 && (
            <Dropdown isActive={isOpen2}>
              <DropdownGroup title="Actions">
                <DropdownItem
                  iconName="check"
                  onSelect={() => setIsOpen2(false)}
                >
                  Créer
                </DropdownItem>
                <DropdownItem
                  iconName="calendar"
                  onSelect={() => setIsOpen2(false)}
                >
                  Modifier
                </DropdownItem>
                <DropdownItem
                  iconName="trash"
                  onSelect={() => setIsOpen2(false)}
                >
                  Supprimer
                </DropdownItem>
              </DropdownGroup>

              <DropdownGroup title="Navigation">
                <DropdownItem
                  iconName="arrow-left"
                  onSelect={() => setIsOpen2(false)}
                >
                  Accueil
                </DropdownItem>
                <DropdownItem
                  iconName="eye"
                  onSelect={() => setIsOpen2(false)}
                >
                  Profil
                </DropdownItem>
                <DropdownItem
                  iconName="search"
                  onSelect={() => setIsOpen2(false)}
                >
                  Paramètres
                </DropdownItem>
              </DropdownGroup>

              <DropdownGroup title="Aide">
                <DropdownItem
                  iconName="infos-circle"
                  onSelect={() => setIsOpen2(false)}
                >
                  Documentation
                </DropdownItem>
                <DropdownItem
                  iconName="exclamation-circle"
                  onSelect={() => setIsOpen2(false)}
                >
                  Support
                </DropdownItem>
              </DropdownGroup>
            </Dropdown>
          )}
        </div>
      </div>

      {/* États des items */}
      <div style={{ marginBottom: '2rem' }}>
        <Title level={3}>États des Items</Title>
        <Text>Items avec différents états (normal, actif, désactivé).</Text>
        <div style={{ marginTop: '1rem', maxWidth: '300px', position: 'relative' }}>
          <button
            onClick={() => setIsOpen3(!isOpen3)}
            style={{
              width: '100%',
              padding: '12px 16px',
              border: '1px solid #ccc',
              borderRadius: '4px',
              background: 'white',
              cursor: 'pointer',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}
          >
            <span>États des items</span>
            <span style={{ transform: isOpen3 ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }}>
              ▼
            </span>
          </button>

          {isOpen3 && (
            <Dropdown isActive={isOpen3}>
              <DropdownItem
                iconName="check"
                onSelect={() => setIsOpen3(false)}
              >
                Item normal
              </DropdownItem>
              <DropdownItem
                iconName="calendar"
                active
                onSelect={() => setIsOpen3(false)}
              >
                Item actif
              </DropdownItem>
              <DropdownItem
                iconName="search"
                onSelect={() => setIsOpen3(false)}
              >
                Autre item normal
              </DropdownItem>
              <DropdownItem iconName="times" disabled>
                Item désactivé
              </DropdownItem>
            </Dropdown>
          )}
        </div>
      </div>

      {/* Dropdown toujours ouvert pour démonstration */}
      <div style={{ marginBottom: '2rem' }}>
        <Title level={3}>Dropdown Toujours Ouvert</Title>
        <Text>Exemple de dropdown toujours visible pour voir les styles.</Text>
        <div style={{ marginTop: '1rem', maxWidth: '300px', position: 'relative' }}>
          <Dropdown isActive={true}>
            <DropdownItem iconName="check">Item avec icône</DropdownItem>
            <DropdownItem>Item sans icône</DropdownItem>
            <DropdownItem iconName="calendar" active>Item actif</DropdownItem>
            <DropdownItem iconName="times" disabled>Item désactivé</DropdownItem>
          </Dropdown>
        </div>
      </div>
    </Section>
  )
}
