// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from 'next'

import { GoogleSpreadsheet } from 'google-spreadsheet'
import dayJs from 'dayjs'

const credentials = {
	client_email: process.env.SHEET_CLIENT_EMAIL,
	private_key: process.env.SHEET_PRIVATE_KEY.replace(/\\n/g, "\n")
}

const doc = new GoogleSpreadsheet(process.env.SHEET_DOC_ID)

/**
 * @param {NextApiRequest} req
 * @param {NextApiResponse} res
 */
export default async function handler(req, res) {
	const body = JSON.parse(req.body)

	await doc.useServiceAccountAuth(credentials)
	await doc.loadInfo()

	const sheet = doc.sheetsByIndex[0]
	try {
		const data = {
			Nome: body.name,
			Email: body.email,
			Mensagem: body.message,
			DataContato: dayJs().format('DD/MM/YYYY HH:mm:ss'),
			Respondido: 0
		}

		await sheet.addRow(data)

		return res.json({
			error: null,
			success: true,
			message: 'Obrigado por realizar o contato'
		})
	} catch (error) {
		const errorSheet = doc.sheetsByIndex[1]
		await errorSheet.addRow({ Error: JSON.stringify(error.message) })
		return res.json({
			success: false,
			error: error,
			message: 'Ocorreu um erro, por favor, tente novamente'
		})
	}
}
