// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from 'next'

import { GoogleSpreadsheet } from 'google-spreadsheet'
import dayJs from 'dayjs'

const credentials = {
	client_email: process.env.SHEET_CLIENT_EMAIL,
	private_key: process.env.SHEET_PRIVATE_KEY.replace(/\\n/g, "\n")
}

/**
 * @param {NextApiRequest} req
 * @param {NextApiResponse} res
 */
export default async function handler(req, res) {
	try {
		const doc = new GoogleSpreadsheet(process.env.SHEET_DOC_ID)

		await doc.useServiceAccountAuth(credentials)
		await doc.loadInfo()

		const sheet = doc.sheetsByIndex[0]
		const data = {
			Nome: 'Ariel',
			Email: 'arielsn1@gmail.com',
			Mensagem: 'Teste',
			DataContato: dayJs().format('DD/MM/YYYY HH:mm:ss'),
			Respondido: 0
		}

		await sheet.addRow(data)

		return res.json(credentials)
	} catch (error) {
		console.log(error)
		return res.json(error)
	}
}
