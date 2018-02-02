
<DialogContent>
                            <TextField
                                    label='event name'
                                    defaultValue="stand up"/>
                                <TextField
                                    label="Start Date"
                                    type="date"
                                    defaultValue ="2018-02-01" />
                                <TextField
                                    label="End Date"
                                    type="date"
                                    defaultValue= "2018-02-01"/>
                                <TextField
                                    label="Start Time"
                                    type="time"
                                    defaultValue= "11:00"/>
                                <TextField
                                    label="EndTime"
                                    type="time"
                                    defaultValue= "11:00"/>
                            <TextField
                                label='Event Location'
                                defaultValue="meeting Room" />
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={this.handleSubmit} color="primary">
                                Submit
                            </Button>
                        </DialogActions>
                    </Dialog>