import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'training',
  title: 'Training',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'date',
      title: 'Date',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          {title: 'Träning', value: 'training'},
          {title: 'Tävling', value: 'competition'},
          {title: 'Event', value: 'event'},
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      date: 'date',
    },
    prepare({title, date}) {
      return {
        title,
        subtitle: new Date(date).toLocaleDateString('sv-SE'),
      }
    },
  },
})
