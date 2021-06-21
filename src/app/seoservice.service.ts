import {Injectable} from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Injectable()
export class SEOService {
  constructor(private title: Title, private meta: Meta) { }

  updateMetaData() {

  }

  updateTitle(title: string) {
    this.title.setTitle(title);
  }

  updateOgUrl(url: string) {
    this.meta.updateTag({ name: 'og:url', content: url })
  }

  updateDescription(desc: string) {
    this.meta.updateTag({ name: 'description', content: desc })
  }

  update(title: string, desc: string, url: string, keywords: string) {
    this.title.setTitle(title);
    this.meta.updateTag({ name: 'description', content: title + ' - ' + desc })
    this.meta.updateTag({ name: 'og:url', content: url })
    this.meta.updateTag({ name: 'keywords', content: keywords })

  }
}
