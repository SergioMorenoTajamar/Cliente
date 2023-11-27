<div className="form-group">
                    <label>Ice Cream Flavors</label>
                    <select className="form-control"
                        name="flavor"
                        value={this.updateFormValue}
                        onChange={this.updateFormValue }
                    >
                        {this.flavors.map(flavor =>
                            <option value={flavor} key={flavor}>
                                {flavor}
                            </option>
                        )}
                    </select>
                </div>

                <div className="form-group">
                    <label>Ice Cream Toppings:</label>
                    <select className="form-control"
                        name="toppings"
                        value={this.state.toppings}
                        onChange={this.updateFormValueOptions}
                        multiple={true}
                    >
                        {this.toppings.map(top =>
                            <option value={top} key={top}>
                                {top}
                            </option>
                        )}
                    </select>
                </div>