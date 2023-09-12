import React from 'react'
import { Badge, Button, Card, Group, Image, Text } from '@mantine/core'
import { PropsOrganizationCard } from '../../../interfaces/organizations.interface';
import { rol_color_replace, rol_replace } from '../../../utils/organizations.utils';

export default function CardOrganization( {organization,onChange} :PropsOrganizationCard) {
  return (
    <Card
    shadow='sm'
    padding='lg'
    radius='lg'
    withBorder
    w={400}
    mah={500}

>
    <Card.Section>
        <Image
            src={organization.Organization.avatar !== '' ? organization.Organization.avatar : 'https://firebasestorage.googleapis.com/v0/b/dynamics-production.appspot.com/o/xd.avif?alt=media&token=12cb1a49-bb80-4b0b-aa5b-27d7b61253ce'}
            height={160}

        />
    </Card.Section>

    <Group position='apart' mt='md' mb='xs'>
        <Text weight={500}>{organization.Organization.name}</Text>
        <Badge color={rol_color_replace[organization.rol]} variant='light'>
            {rol_replace[organization.rol]}
        </Badge>
    </Group>

    {/* <Text size='sm' color='dimmed'>
        With Fjord Tours you can explore more of the magical fjord
        landscapes with tours and activities on and around the fjords
        of Norway
    </Text> */}

    <Button
        variant='light'
        color='blue'
        fullWidth
        mt='md'
        radius='md'
onClick={() => onChange({...organization.Organization, rol: organization.rol})}
    >
        Seleccionar
    </Button>
</Card>
  )
}
