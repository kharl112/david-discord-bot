import discord
import random
import asyncio
from discord.ext import commands

client = discord.Client()
client  = commands.Bot(command_prefix = '/')

@client.event
async def on_ready():
    print("DavidBot is ready.")

#@client.event
#async def on_member_join(member):
    #print(f'{member} has joined this lame server')

#@client.event
#async def on_member_left(member):
    #print(f'{member}s ass has removed from the server')

@client.command()
async def ping(ctx):
        await ctx.send("hmmmmmmmmmmmmmmmmmmmmmm")

@client.command()
async def fuck(ctx):
        await ctx.send("fuck")

@client.command(aliases=['ques','question'])
async def askME(ctx,que):
    responses = ['no',
                  'yes'  ]
    await ctx.send(f'{random.choice(responses)}')

@client.command(aliases=['playCAH','play CAH','playcah','play Cards Against Humanity''CAH','Cards','Humanity'])
async def CAH1(message):
    responses = [
        "https://dougsarchaeology.files.wordpress.com/2015/12/cards-against-tag-b-1.png",
        "https://dougsarchaeology.files.wordpress.com/2015/12/cards-against-tag-b-2.png",
        "https://dougsarchaeology.files.wordpress.com/2015/12/cards-against-tag-b-3.png",
        "https://dougsarchaeology.files.wordpress.com/2015/12/cards-against-tag-b-4.png",
        "https://dougsarchaeology.files.wordpress.com/2015/12/cards-against-tag-b-5.png",
        "https://dougsarchaeology.files.wordpress.com/2015/12/cards-against-tag-b-6.png",
        "https://dougsarchaeology.files.wordpress.com/2015/12/cards-against-tag-b-7.png",
        "https://dougsarchaeology.files.wordpress.com/2015/12/cards-against-tag-b-8.png",
        "https://dougsarchaeology.files.wordpress.com/2015/12/cards-against-tag-b-9.png",
        "https://dougsarchaeology.files.wordpress.com/2015/12/cards-against-tag-b-10.png",
        "https://dougsarchaeology.files.wordpress.com/2015/12/cards-against-tag-b-11.png",
        "https://dougsarchaeology.files.wordpress.com/2015/12/cards-against-tag-b-12.png",
        "https://dougsarchaeology.files.wordpress.com/2015/12/cards-against-tag-b-13.png",
        "https://dougsarchaeology.files.wordpress.com/2015/12/cards-against-tag-b-14.png",
        "https://dougsarchaeology.files.wordpress.com/2015/12/cards-against-tag-b-15.png",
        "https://dougsarchaeology.files.wordpress.com/2015/12/cards-against-tag-b-16.png",
        "https://dougsarchaeology.files.wordpress.com/2015/12/cards-against-tag-b-17.png",
        "https://dougsarchaeology.files.wordpress.com/2015/12/cards-against-tag-b-18.png",
        "https://dougsarchaeology.files.wordpress.com/2015/12/cards-against-tag-b-19.png",
        "https://dougsarchaeology.files.wordpress.com/2015/12/cards-against-tag-b-20.png",
        "https://dougsarchaeology.files.wordpress.com/2015/12/cards-against-tag-b-21.png",
        "https://dougsarchaeology.files.wordpress.com/2015/12/cards-against-tag-b-22.png",
        "https://dougsarchaeology.files.wordpress.com/2015/12/cards-against-tag-b-23.png",
        "https://dougsarchaeology.files.wordpress.com/2015/12/cards-against-tag-b-24.png",
        "https://dougsarchaeology.files.wordpress.com/2015/12/cards-against-tag-b-25.png",
        "https://dougsarchaeology.files.wordpress.com/2015/12/cards-against-tag-b-26.png",
        "https://dougsarchaeology.files.wordpress.com/2015/12/cards-against-tag-b-27.png",
        "https://dougsarchaeology.files.wordpress.com/2015/12/cards-against-tag-b-28.png",
        "https://dougsarchaeology.files.wordpress.com/2015/12/cards-against-tag-b-29.png",
        "https://dougsarchaeology.files.wordpress.com/2015/12/cards-against-tag-b-0.png",
       ]
    e = discord.Embed()
    e.set_image(url= random.choice(responses))
    await message.channel.send(f'{message.author.name} picked a black card', embed=e)

@client.command()
async def pick(message):
    responses2 = [
        "https://i.imgur.com/jWj1Q2d.png",
        "https://i.imgur.com/1fzyoWm.png",
        "https://i.imgur.com/di7oW7V.png",
        "https://i.imgur.com/6T9H0e5.png",
        "https://i.imgur.com/VBdgTQ3.png",
        "https://i.imgur.com/fRrayAn.png",
        "https://i.imgur.com/C4dyEsE.png",
        "https://i.imgur.com/tF3n33v.png",
        "https://i.imgur.com/2D96cNZ.png",
        "https://i.imgur.com/hJTsnNX.png",
        "https://i.imgur.com/GfMmsqS.png",
        "https://i.imgur.com/SESywch.png",
        "https://i.imgur.com/jCLi5w3.png",
        "https://i.imgur.com/CvTySyZ.png",
        "https://i.imgur.com/qhqSGbT.png",
        "https://i.imgur.com/VV975Ss.png",
        "https://i.imgur.com/DWM2nhN.png",
        "https://i.imgur.com/IJdEqlu.png",
        "https://i.imgur.com/o0lJ3ZX.png",
        "https://i.imgur.com/JATNPRh.png",
        "https://i.imgur.com/m26uV7r.png",
        "https://i.imgur.com/imBZEum.png",
        "https://i.imgur.com/CKwm7N4.png",
        "https://i.imgur.com/lnJi8sF.png",
        "https://i.imgur.com/BnAxzAM.png",
        "https://i.imgur.com/qjRHJAC.png",
        "https://i.imgur.com/wz8ZHcK.png",
        "https://i.imgur.com/9KlNiI2.png",
        "https://i.imgur.com/TMUdrwB.png",
        "https://i.imgur.com/uwZUPSd.png",
        "https://i.imgur.com/dwReKsW.png",
        "https://i.imgur.com/UoJ2S2r.png",
        "https://i.imgur.com/iDu9eOU.png",
        "https://i.imgur.com/yroa19m.png",
        "https://i.imgur.com/lS5CQiP.png",
        "https://i.imgur.com/ONR5JJj.png",
        "https://i.imgur.com/ftWsWTR.png",
        "https://i.imgur.com/Cxlxw4S.png",
        "https://i.imgur.com/yzphpAC.png",
        "https://i.imgur.com/Ek4YuFj.png",
        "https://i.imgur.com/5ij1WNF.png",
        "https://i.imgur.com/uXlXUY4.png",
        "https://i.imgur.com/vJijjdd.png",
        "https://i.imgur.com/YFctehj.png",
        "https://i.imgur.com/Th2NP0i.png",
        "https://i.imgur.com/4EODK5d.png",
        "https://i.imgur.com/V4Nonyu.png",
        "https://i.imgur.com/qzH4gKz.png",
        "https://i.imgur.com/J0U36IR.png",
        "https://i.imgur.com/cqOHEnc.png",
        "https://i.imgur.com/MK2EHEe.png",
        "https://i.imgur.com/nJYXmKn.png",
        "https://i.imgur.com/s7HllAB.png",
        "https://i.imgur.com/hzwUFMo.png",
        "https://i.imgur.com/ovlkeLv.png",
        "https://i.imgur.com/Agsvblp.png",
        "https://i.imgur.com/0hCHy0P.png",
        "https://i.imgur.com/CQLbRE6.png",
        "https://i.imgur.com/uTVvnF1.png",
        "https://i.imgur.com/aYwsUJm.png",
        "https://i.imgur.com/eoP9FJH.png",
        "https://i.imgur.com/pQi56FU.png",
        "https://i.imgur.com/7E5GfRF.png",
        "https://i.imgur.com/3lUrhWe.png",
        "https://i.imgur.com/aZKSRfZ.png",
        "https://i.imgur.com/eQG08Op.png",
        "https://i.imgur.com/beMjCKG.png",
        "https://i.imgur.com/WxWiRzW.png",
        "https://i.imgur.com/o5YAu0u.png",
        "https://i.imgur.com/qUIthse.png",
        "https://i.imgur.com/MX9J3qi.png",
        "https://i.imgur.com/KiBuoP0.png",
        "https://i.imgur.com/WT5Lr0A.png",
        "https://i.imgur.com/xzgZGV7.png",
        "https://i.imgur.com/XMdFJ2T.png",
        "https://i.imgur.com/qJ1WPIJ.png",
        "https://i.imgur.com/tbzq9DB.png",
        "https://i.imgur.com/rdIp5yG.png",
        "https://i.imgur.com/OWQpqHa.png",
        "https://i.imgur.com/rlZ5UFX.png",
        "https://i.imgur.com/Ou9o2no.png",
        "https://i.imgur.com/QIzrAfY.png",
        "https://i.imgur.com/13QaWVX.png",
        "https://i.imgur.com/YeTZxzE.png",
        "https://i.imgur.com/xW8hYze.png",
        "https://i.imgur.com/1JcpPxc.png",
        "https://i.imgur.com/e9DRhuu.png",
        "https://i.imgur.com/K0k69mu.png",
        "https://i.imgur.com/d9x95yQ.png",
        "https://i.imgur.com/i09ZqGk.png",
        "https://i.imgur.com/dkNUES4.png",
        "https://i.imgur.com/tDxI6Wn.png",
        "https://i.imgur.com/HkeVGSz.png",
        ]
    e = discord.Embed()
    e.set_image(url= random.choice(responses2))
    await message.channel.send(f'{message.author.name} picked a white card', embed=e)


@client.command(aliases=['CAH--help','cah--help'])
async def helpME(ctx):
        await ctx.send(f'CARDS AGAINST HUMANITY\n No rules bc rules are for fools,\nAfter davidBOT picked a card for you,\ntype "/pick" for the next card to appear\nthese are all from cardsagainsthumanity.com btw')
client.run('NzE1OTE4NTI0OTU4MjQ0ODY0.XtEbrg.caSdVxzFFP8LfgAl-TF-1xYGfqQ')
