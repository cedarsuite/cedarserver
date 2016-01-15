Template.actionDisplay.helpers({
    actionType: function (type) {
        return this.type == type
    },
    
    getMedia: function () {
        return media.findOne(this.media);
    },
    
    getStreaming: function () {
        if (this.streamingtype == 'source')
            return streamingsources.findOne(this.source);
        else if (this.streamingtype == 'mix')
            return streamingmixes.findOne(this.mix);
    },
    
    getMix: function () {
        return streamingmix.findOne(this.mix);
    },
    
    getPlaylist: function () {
        return mediaplaylists.findOne(this.playlist);
    },
    
    getLightScene: function () {
        return lightscenes.findOne(this.lightscene);
    },
    
    getSong: function () {
        var song = songs.findOne(this.song);
        song.arrangement = songarrangements.findOne(this.settings.arrangement);
        song.action = this._id;
        return song;
    },
    
    getPresentation: function () {
        var pres = presentations.findOne(this.presentation);
        pres.action = this._id;
        return pres;
    }
});
