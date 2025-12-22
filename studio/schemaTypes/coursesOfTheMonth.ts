import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'courseOfTheMonth',
  title: 'Course of the Month',
  type: 'document',
  fields: [
    defineField({
      name: 'year',
      title: 'Year',
      type: 'number',
      validation: (Rule) => Rule.required().min(2024).max(2100),
    }),
    defineField({
      name: 'mapImage',
      title: 'Course Map',
      type: 'image',
      description: 'Main course map image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'introduction',
      title: 'Introduction',
      type: 'text',
      description: 'Brief introduction about the courses',
    }),
    defineField({
      name: 'periods',
      title: 'Course Periods',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'dates',
              title: 'Dates',
              type: 'string',
              description: 'E.g. "3/6 – 30/6"',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'location',
              title: 'Location',
              type: 'string',
              description: 'E.g. "Kinna, Marieberg, Mjögasjön"',
              validation: (Rule) => Rule.required(),
            },
          ],
          preview: {
            select: {
              dates: 'dates',
              location: 'location',
            },
            prepare({dates, location}) {
              return {
                title: dates,
                subtitle: location,
              }
            },
          },
        },
      ],
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: 'information',
      title: 'Information',
      type: 'array',
      of: [{type: 'string'}],
      description: 'List of information points',
    }),
    defineField({
      name: 'paymentInfo',
      title: 'Payment Information',
      type: 'array',
      of: [{type: 'block'}],
      description: 'Payment details and instructions',
    }),
    defineField({
      name: 'contacts',
      title: 'Contacts',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'name', type: 'string', title: 'Name'},
            {name: 'phone', type: 'string', title: 'Phone'},
          ],
        },
      ],
    }),
  ],
  preview: {
    select: {
      year: 'year',
    },
    prepare({year}) {
      return {
        title: `Månadens banor ${year}`,
      }
    },
  },
})
