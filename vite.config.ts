import { defineConfig } from "vite";
import monkey from "vite-plugin-monkey";

export default defineConfig((config) => {
  return {
    plugins: [
      monkey({
        entry: "src/index.ts",
        userscript: {
          match: [
            "*://*.adelaidenow.com.au/*",
            "*://*.adweek.com/*",
            "*://*.afr.com/*",
            "*://*.ambito/*",
            "*://*.ampproject.org/*",
            "*://*.baltimoresun.com/*",
            "*://*.barrons.com/*",
            "*://*.bizjournals.com/*",
            "*://*.bloomberg.com/*",
            "*://*.bloombergquint.com/*",
            "*://*.bostonglobe.com/*",
            "*://*.brisbanetimes.com.au/*",
            "*://*.britannica.com/*",
            "*://*.businessinsider.com/*",
            "*://*.caixinglobal.com/*",
            "*://*.cen.acs.org/*",
            "*://*.centralwesterndaily.com.au/*",
            "*://*.chicagobusiness.com/*",
            "*://*.chicagotribune.com/*",
            "*://*.corriere.it/*",
            "*://*.courant.com/*",
            "*://*.couriermail.com.au/*",
            "*://*.dailypress.com/*",
            "*://*.dailytelegraph.com.au/*",
            "*://*.delfi.ee/*",
            "*://*.demorgen.be/*",
            "*://*.denverpost.com/*",
            "*://*.df.cl/*",
            "*://*.dynamed.com/*",
            "*://*.economist.com/*",
            "*://*.elmercurio.com/*",
            "*://*.elmundo.es/*",
            "*://*.elu24.ee/*",
            "*://*.entreprenal.com/*",
            "*://*.examiner.com.au/*",
            "*://*.expansion.com/*",
            "*://*.fd.nl/*",
            "*://*.financialpost.com/*",
            "*://*.fnlondon.com/*",
            "*://*.foreignpolicy.com/*",
            "*://*.fortune.com/*",
            "*://*.ft.com/*",
            "*://*.gelocal.it/*",
            "*://*.genomeweb.com/*",
            "*://*.glassdoor.com/*",
            "*://*.globes.co.il/*",
            "*://*.groene.nl/*",
            "*://*.haaretz.co.il/*",
            "*://*.haaretz.com/*",
            "*://*.harpers.org/*",
            "*://*.hbr.org/*",
            "*://*.hbrchina.org/*",
            "*://*.heraldsun.com.au/*",
            "*://*.historyextra.com/*",
            "*://*.humo.be/*",
            "*://*.ilmanifesto.it/*",
            "*://*.inc.com/*",
            "*://*.inquirer.com/*",
            "*://*.interest.co.nz/*",
            "*://*.investorschronicle.co.uk/*",
            "*://*.irishtimes.com/*",
            "*://*.japantimes.co.jp/*",
            "*://*.journalnow.com/*",
            "*://*.kansascity.com/*",
            "*://*.labusinessjournal.com/*",
            "*://*.lanacion.com.ar/*",
            "*://*.lastampa.it/*",
            "*://*.latercera.com/*",
            "*://*.latimes.com/*",
            "*://*.lavoixdunord.fr/*",
            "*://*.lecho.be/*",
            "*://*.leparisien.fr/*",
            "*://*.lesechos.fr/*",
            "*://*.loebclassics.com/*",
            "*://*.lrb.co.uk/*",
            "*://*.mcall.com/*",
            "*://*.medium.com/*",
            "*://*.medscape.com/*",
            "*://*.mercurynews.com/*",
            "*://*.mv-voice.com/*",
            "*://*.nationalgeographic.com",
            "*://*.nationalpost.com/*",
            "*://*.netdna-ssl.com/*",
            "*://*.news-gazette.com/*",
            "*://*.newstatesman.com/*",
            "*://*.newyorker.com/*",
            "*://*.nrc.nl/*",
            "*://*.ntnews.com.au/*",
            "*://*.nydailynews.com/*",
            "*://*.nymag.com/*",
            "*://*.nytimes.com/*",
            "*://*.nzherald.co.nz/*",
            "*://*.nzz.ch/*",
            "*://*.ocregister.com/*",
            "*://*.orlandosentinel.com/*",
            "*://*.outbrain.com/*",
            "*://*.paloaltoonline.com/*",
            "*://*.parool.nl/*",
            "*://*.piano.io/*",
            "*://*.poool.fr/*",
            "*://*.postimees.ee/*",
            "*://*.qiota.com/*",
            "*://*.quora.com/*",
            "*://*.qz.com/*",
            "*://*.repubblica.it/*",
            "*://*.republic.ru/*",
            "*://*.reuters.com/*",
            "*://*.sandiegouniontribune.com/*",
            "*://*.scientificamerican.com/*",
            "*://*.scmp.com/*",
            "*://*.seattletimes.com/*",
            "*://*.seekingalpha.com/*",
            "*://*.slate.com/*",
            "*://*.smh.com.au/*",
            "*://*.sofrep.com/*",
            "*://*.spectator.co.uk/*",
            "*://*.spectator.com.au/*",
            "*://*.spectator.us/*",
            "*://*.speld.nl/",
            "*://*.startribune.com/*",
            "*://*.statista.com/*",
            "*://*.stuff.co.nz/*",
            "*://*.sueddeutsche.de/*",
            "*://*.sun-sentinel.com/*",
            "*://*.techinasia.com/*",
            "*://*.technologyreview.com/*",
            "*://*.telegraaf.nl/*",
            "*://*.telegraph.co.uk/*",
            "*://*.the-tls.co.uk/*",
            "*://*.theadvocate.com.au/*",
            "*://*.theage.com.au/*",
            "*://*.theathletic.co.uk/*",
            "*://*.theathletic.com/*",
            "*://*.theatlantic.com/*",
            "*://*.theaustralian.com.au/*",
            "*://*.thediplomat.com/*",
            "*://*.theglobeandmail.com/*",
            "*://*.theherald.com.au/*",
            "*://*.thehindu.com/*",
            "*://*.themarker.com/*",
            "*://*.themercury.com.au/*",
            "*://*.thenation.com/*",
            "*://*.thenational.scot/*",
            "*://*.theolivepress.es/*",
            "*://*.thesaturdaypaper.com.au/*",
            "*://*.thestar.com/*",
            "*://*.thewrap.com/*",
            "*://*.tijd.be/*",
            "*://*.time.com/*",
            "*://*.tinypass.com/*",
            "*://*.towardsdatascience.com/*",
            "*://*.trouw.nl/*",
            "*://*.vanityfair.com/*",
            "*://*.vn.nl/*",
            "*://*.volkskrant.nl/*",
            "*://*.washingtonpost.com/*",
            "*://*.wired.com/*",
            "*://*.wsj.com/*",
            "*://*.zeit.de/*",
            "*://*/*",
          ],
        },
      }),
    ],
  };
});
