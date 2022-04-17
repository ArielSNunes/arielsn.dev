// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from 'next'

/**
 * @param {NextApiRequest} req
 * @param {NextApiResponse} res
 */
export default function handler(req, res) {
	res.status(200).json({ name: 'John Doe' })
}
