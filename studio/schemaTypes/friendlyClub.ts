import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'friendlyClub',
  title: 'Friendly Clubs',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Club Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      validation: (Rule) => Rule.required().min(0),
    }),
  ],
})
