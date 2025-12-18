import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'eventGallery',
  title: 'Event Gallery',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'eventLabel',
      title: 'Event Label',
      type: 'string',
      description: 'E.g. "O-EVENT · DAG 1"',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'eventDate',
      title: 'Event Date',
      type: 'date',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      description:
        'Main image shown in gallery overview. If empty, placeholder image will be shown.',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'images',
      title: 'Gallery Images',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alt text',
            },
            {
              name: 'caption',
              type: 'string',
              title: 'Caption',
            },
          ],
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      date: 'eventDate',
      media: 'coverImage',
    },
    prepare({title, date, media}) {
      return {
        title,
        subtitle: date,
        media,
      }
    },
  },
})
