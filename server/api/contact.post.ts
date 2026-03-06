export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    const config = useRuntimeConfig(event)

    const telegramBotToken = config.telegramBotToken
    const telegramChatId = config.telegramChatId

    if (!telegramBotToken || !telegramChatId) {
        throw createError({
            statusCode: 500,
            statusMessage: 'Telegram configuration is missing'
        })
    }

    const message = `
🌟 <b>New Partnership Request</b>
👤 <b>Name:</b> ${body.fname} ${body.lname}
✉️ <b>Email:</b> ${body.email}
🏢 <b>Company:</b> ${body.company}

💬 <b>Message:</b>
${body.message}
  `

    try {
        const res = await $fetch(`https://api.telegram.org/bot${telegramBotToken}/sendMessage`, {
            method: 'POST',
            body: {
                chat_id: telegramChatId,
                text: message,
                parse_mode: 'HTML'
            }
        })
        return { success: true }
    } catch (error) {
        console.error('Telegram API error:', error)
        throw createError({
            statusCode: 500,
            statusMessage: 'Failed to send message to Telegram'
        })
    }
})
