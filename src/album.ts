export class Album {
    name: string;
    artist: string;
    url: string;
    image: string;

    public constructor(name: string, artist: string, link: string, image: string) {
        this.name = name
        this.artist = artist;
        this.url = link;
        this.image = image
    }

}