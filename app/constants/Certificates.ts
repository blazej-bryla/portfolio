import fs from 'fs'
import path from 'path'
import { GalleryProps } from '../types'

const certificatesPath = path.join(__dirname, '../../../public/certificates')

function getCertificateList(): Array<GalleryProps> {
  try {
    const files = fs.readdirSync(certificatesPath)
    const certificateList: Array<GalleryProps> = files.map((filename) => {
      return {
        image: `/certificates/${filename}`,
        label: filename.split('.')[0]
      }
    })
    return certificateList
  } catch (error) {
    console.error('Error reading certificate files: ', error)
    return []
  }
}

export const CertificateList: Array<GalleryProps> = getCertificateList()
