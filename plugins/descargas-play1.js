/*import fetch from 'node-fetch';
import yts from 'yt-search';
import ytdl from 'ytdl-core';
import axios from 'axios';
import {youtubedl, youtubedlv2} from '@bochilteam/scraper';
const handler = async (m, {conn, command, args, text, usedPrefix}) => {
if (!text) throw `_𝐄𝐬𝐜𝐫𝐢𝐛𝐞 𝐮𝐧𝐚 𝐩𝐞𝐭𝐢𝐜𝐢𝐨́𝐧 𝐥𝐮𝐞𝐠𝐨 𝐝𝐞𝐥 𝐜𝐨𝐦𝐚𝐧𝐝𝐨 𝐞𝐣𝐞𝐦𝐩𝐥𝐨:_ \n*${usedPrefix + command} Billie Eilish - Bellyache*`
try { 
const yt_play = await search(args.join(' '))
const texto1 = `
╭ׅׄ̇─͓̗̗─ׅ̻ׄ╮۪̇߭⊹߭̇︹ׅ̟ׄ̇︹ׅ۪ׄ̇߭︹ׅ̟ׄ̇⊹۪̇߭︹ׅ̟ׄ̇︹ׅ۪ׄ̇߭︹ׅ̟ׄ̇⊹۪̇߭︹ׅ̟ׄ̇︹ׅ۪ׄ̇߭︹ׅ̟ׄ̇߭︹ׅ۪ׄ̇߭̇⊹
┟─⬪࣪ꥈ𑁍⃪࣭۪ٜ݊݊݊݊݊໑ٜ࣪ᴅᴇsᴄᴀʀɢᴀs໑⃪࣭۪ٜ݊݊݊݊𑁍ꥈ࣪⬪╮
╭┄─🍂⬪࣪ꥈ𑁍⃪࣭۪ٜ݊݊݊݊݊໑ٜ࣪H̸u̸T̸a̸o̸M̸D̸໑⃪࣭۪ٜ݊݊݊݊𑁍ꥈ࣪⬪╯
│
├ ఌ︎♫︎T͜͡i͜͡t͜͡u͜͡l͜͡o͜͡
├» ${yt_play[0].title}
├╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌┄
├ ♫︎♡︎ P̆̈ŭ̈b̆̈l̆̈ĭ̈c̆̈ă̈d̆̈ŏ̈
├» ${yt_play[0].ago}
├╌╌╌╌╌╌╌╌╌╌╌╌╌╌┈
├ ♫︎🝮︎︎︎ᴅᴜʀᴀᴄɪᴏɴ
├» ${secondString(yt_play[0].duration.seconds)}
├╌╌╌╌╌╌╌╌╌╌╌╌┄
├ ❥︎ꨄ︎ 𝐕𝐢𝐬𝐭𝐚𝐬
├» ${MilesNumber(yt_play[0].views)}
├╌╌╌╌╌╌╌╌╌╌┄
├ ✿︎シ︎ 𝔸𝕦𝕥𝕠𝕣
├» ${yt_play[0].author.name}
├╌╌╌╌╌╌╌╌┈
├ ➪♫︎ 𝐸𝑛𝑙𝑎𝑐𝑒
├» ${yt_play[0].url}
╰ׁ̻۫─۪۬─۟─۪─۫─۪۬─۟─۪─۟─۪۬─۟─۪─۟─۪۬─۟─۪─۟┄۪۬┄۟┄۪┈۟┈۪`.trim()

await conn.sendButton(m.chat, wm, texto1, yt_play[0].thumbnail, [['⍟ 𝐌 𝐏 3 ',`${usedPrefix}supermusic ${yt_play[0].url}`],['𑁍 𝐕 𝐈 𝐃 𝐄 𝐎',`${usedPrefix}supervideo ${yt_play[0].url}`]], null, null, fgif2)
} catch (e) {
await conn.reply(m.chat, `*[ ! ] ʜᴜʙᴏ ᴜɴ ᴇʀʀᴏʀ ᴇɴ ᴇʟ ᴄᴏᴍᴀɴᴅᴏ ᴘᴏʀ ғᴀᴠᴏʀ ɪɴᴛᴇɴᴛᴀ ᴍᴀs ᴛᴀʀᴅᴇ..*`, fkontak, m, rcanal)
console.log(`❗❗ᴇʀʀᴏʀ ${usedPrefix + command} ❗❗`)
console.log(e)
handler.limit = 0
}}
handler.command = ['play', 'play2', 'play3', 'play4']
//handler.limit = 3
//handler.register = false 
handler.group = true
export default handler;

async function search(query, options = {}) {
const search = await yts.search({query, hl: 'es', gl: 'ES', ...options});
return search.videos;
}

function MilesNumber(number) {
const exp = /(\d)(?=(\d{3})+(?!\d))/g;
const rep = '$1.';
const arr = number.toString().split('.');
arr[0] = arr[0].replace(exp, rep);
return arr[1] ? arr.join('.') : arr[0];
}

function secondString(seconds) {
seconds = Number(seconds);
const d = Math.floor(seconds / (3600 * 24));
const h = Math.floor((seconds % (3600 * 24)) / 3600);
const m = Math.floor((seconds % 3600) / 60);
const s = Math.floor(seconds % 60);
const dDisplay = d > 0 ? d + (d == 1 ? ' día, ' : ' días, ') : '';
const hDisplay = h > 0 ? h + (h == 1 ? ' hora, ' : ' horas, ') : '';
const mDisplay = m > 0 ? m + (m == 1 ? ' minuto, ' : ' minutos, ') : '';
const sDisplay = s > 0 ? s + (s == 1 ? ' segundo' : ' segundos') : '';
return dDisplay + hDisplay + mDisplay + sDisplay;
}*/
