import React from 'react'
import { Timeline, TimelineItem, TimelineMarker, TimelineContent } from './index'
import { Columns, ColumnsItem } from '../columns'

const TimelineExample: React.ReactNode =

<Columns>
    <ColumnsItem>
        <Timeline>
            <TimelineItem undone>
                <TimelineMarker iconName='tri-bell' />
                <TimelineContent
                    content='Modification de votre identifiant de connexion'
                    contentLink="Voir l'email"
                    heading='20 Septembre'
                    link='link'
                />
            </TimelineItem>
            <TimelineItem active>
                <TimelineMarker iconName='tri-bell' />
                <TimelineContent
                    content='SMS Bon voyage avec seuil usage inclus'
                    contentLink='Voir le SMS'
                    heading='08 Juillet'
                    link='link'
                />
            </TimelineItem>
            <TimelineItem done>
                <TimelineMarker iconName='tri-bell' />
                <TimelineContent
                    content='Passage en boutique concernant un accessoire'
                    heading='06 Juillet'
                />
            </TimelineItem>
            <TimelineItem done>
                <TimelineMarker iconName='tri-bell' />
                <TimelineContent
                    content='Modification de votre adresse de facturation'
                    heading='05 Mai'
                />
            </TimelineItem>
        </Timeline>
    </ColumnsItem>
    <ColumnsItem>
        <Timeline horizontal>
            <TimelineItem done>
                <TimelineMarker iconName='tri-bell' />
                <TimelineContent
                    content='Modification de votre identifiant de connexion'
                    contentLink="Voir l'email"
                    heading='20 Septembre'
                    link='https://bouyguestelecom.fr'
                />
            </TimelineItem>
            <TimelineItem done>
                <TimelineMarker
                    iconColor='WHITE'
                    iconName='tri-bell'
                />
                <TimelineContent
                    content='SMS Bon voyage avec seuil usage inclus'
                    contentLink='Voir le SMS'
                    heading='08 Juillet'
                    link='link'
                />
            </TimelineItem>
            <TimelineItem active>
                <TimelineMarker
                    iconColor='WHITE'
                    iconName='tri-bell'
                />
                <TimelineContent
                    content='SMS Bon voyage avec seuil usage inclus'
                    contentLink='Voir le SMS'
                    heading='08 Juillet'
                    link='link'
                />
            </TimelineItem>
            <TimelineItem undone>
                <TimelineMarker
                    iconColor='WHITE'
                    iconName='tri-bell'
                />
                <TimelineContent
                    content='SMS Bon voyage avec seuil usage inclus'
                    contentLink='Voir le SMS'
                    heading='08 Juillet'
                    link='link'
                />
            </TimelineItem>
        </Timeline>
    </ColumnsItem>
</Columns>

export default TimelineExample
